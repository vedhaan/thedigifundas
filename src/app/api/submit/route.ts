import { NextResponse } from "next/server";

const FIELDS = {
  newsletter: ["name", "email"],
  application: [
    "name",
    "email",
    "phone",
    "position",
    "portfolio",
    "linkedin",
    "resume_link",
    "message",
  ],
} as const;

type FormType = keyof typeof FIELDS;

const MAX_LENGTH: Record<string, number> = { message: 3000, resume_link: 600 };
const DEFAULT_MAX = 300;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BLOB_URL = /^https:\/\/[a-z0-9-]+\.(public\.)?blob\.vercel-storage\.com\//;

function fail(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;
  if (!scriptUrl || !secret) {
    return fail("This form isn't set up yet. Please try again later.", 503);
  }

  let body: { type?: string; data?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.");
  }

  const type = body.type as FormType;
  if (!type || !(type in FIELDS)) return fail("Invalid request.");

  const raw = body.data ?? {};

  // Bots fill the hidden field. Pretend it worked and drop the submission.
  if (raw._gotcha) return NextResponse.json({ ok: true });

  const data: Record<string, string> = {};
  for (const field of FIELDS[type]) {
    const value = String(raw[field] ?? "").trim();
    if (value.length > (MAX_LENGTH[field] ?? DEFAULT_MAX)) {
      return fail(`The ${field.replace("_", " ")} field is too long.`);
    }
    data[field] = value;
  }

  if (!data.name) return fail("Please enter your name.");
  if (!EMAIL.test(data.email)) return fail("Please enter a valid email address.");

  if (type === "application") {
    if (!data.phone) return fail("Please enter your phone number.");
    if (!data.position) return fail("Please choose a position.");
    for (const f of ["portfolio", "linkedin"]) {
      if (data[f] && !/^https?:\/\//i.test(data[f])) {
        return fail(`Please enter a full link for ${f}, starting with https://`);
      }
    }
    // Only links produced by our own upload route are accepted, so nobody
    // can plant an arbitrary link in a column you will click.
    if (data.resume_link && !BLOB_URL.test(data.resume_link)) {
      return fail("Invalid resume link.");
    }
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, type, data }),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const result = await res.json().catch(() => null);
    if (!result?.ok) throw new Error("script rejected");
    return NextResponse.json({ ok: true });
  } catch {
    return fail("We couldn't save that just now. Please try again.", 502);
  }
}