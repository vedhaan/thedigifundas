import { upload } from "@vercel/blob/client";

export const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export const RESUME_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function getExtension(fileName: string) {
  const ext = fileName.split(".").pop()?.toLowerCase() ?? "";
  return ext in RESUME_TYPES ? ext : null;
}

// Returns an error message, or null when the file is acceptable.
export function validateResume(file: File): string | null {
  if (!getExtension(file.name)) return "Please choose a PDF, DOC or DOCX file.";
  if (file.size > MAX_RESUME_BYTES) return "That file is larger than 5MB. Please choose a smaller one.";
  return null;
}

export type UploadResult = { ok: true; url: string } | { ok: false; message: string };

export async function uploadResume(file: File): Promise<UploadResult> {
  const ext = getExtension(file.name);
  if (!ext) return { ok: false, message: "Please choose a PDF, DOC or DOCX file." };

  // The SDK retries failed uploads several times, which can leave the form
  // spinning for minutes. Give up after 30 seconds instead.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30_000);

  try {
    // Random name on purpose: the applicant's own filename often contains
    // their full name, and this URL ends up in an email.
    const blob = await upload(`resumes/${crypto.randomUUID()}.${ext}`, file, {
      access: "public",
      handleUploadUrl: "/api/resume-upload",
      contentType: RESUME_TYPES[ext], // delete this line if you applied step 2
      abortSignal: controller.signal,
    });
    return { ok: true, url: blob.url };
  } catch (error) {
    console.error("[uploadResume] failed:", error);
    return { ok: false, message: "Resume upload failed. Please try again." };
  } finally {
    clearTimeout(timer);
  }
}