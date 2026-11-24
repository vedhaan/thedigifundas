import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { MAX_RESUME_BYTES, RESUME_TYPES } from "@/lib/constants/resume";
import { getBlobToken } from "@/lib/constants/blobToken";

// Only the exact shape the form generates is allowed: resumes/<uuid>.<ext>
const PATH_PATTERN = /^resumes\/[0-9a-f-]{36}\.(pdf|doc|docx)$/;

const isDev = process.env.NODE_ENV === "development";

export async function POST(request: Request) {
  let body: HandleUploadBody;
  try {
    body = (await request.json()) as HandleUploadBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const token = getBlobToken();
  if (!token) {
    console.error(
      "[resume-upload] No Blob token. Set thedigifundasblob_READ_WRITE_TOKEN (or BLOB_READ_WRITE_TOKEN) in .env.local and restart the dev server."
    );
    return NextResponse.json(
      { error: "Storage isn't configured: no Blob token found." },
      { status: 500 }
    );
  }

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token,
      onBeforeGenerateToken: async (pathname) => {
        if (!PATH_PATTERN.test(pathname)) {
          throw new Error(`Invalid file name: ${pathname}`);
        }
        return {
          allowedContentTypes: Object.values(RESUME_TYPES),
          maximumSizeInBytes: MAX_RESUME_BYTES,
          addRandomSuffix: true,
        };
      },
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[resume-upload] failed:", message);
    return NextResponse.json(
      { error: isDev ? message : "Upload could not be started." },
      { status: 400 }
    );
  }
}