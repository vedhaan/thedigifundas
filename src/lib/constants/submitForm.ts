import { formEndpoints, type FormKey } from "@/lib/constants/forms";

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function submitForm(
  form: FormKey,
  data: FormData | Record<string, string>
): Promise<SubmitResult> {
  const endpoint: string = formEndpoints[form];

  if (!endpoint || endpoint.includes("YOUR_")) {
    return { ok: false, message: "This form isn't set up yet. Please try again later." };
  }

  const isFormData = data instanceof FormData;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: isFormData
        ? { Accept: "application/json" }
        : { Accept: "application/json", "Content-Type": "application/json" },
      body: isFormData ? data : JSON.stringify(data),
    });

    if (res.ok) return { ok: true };

    const json = await res.json().catch(() => null);
    const message =
      json?.errors?.map((e: { message: string }) => e.message).join(", ") ||
      json?.error ||
      "Something went wrong. Please try again.";
    return { ok: false, message };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}