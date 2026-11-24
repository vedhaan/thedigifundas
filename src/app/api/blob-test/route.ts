import { put, del } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getBlobToken } from "@/lib/constants/blobToken";

// TEMPORARY diagnostic. Delete this file as soon as uploads work.
export async function GET() {
  const token = getBlobToken();
  const results: Record<string, unknown> = { tokenFound: !!token };

  for (const access of ["public", "private"]) {
    try {
      const blob = await put(`diagnostics/${access}-test.txt`, "test", {
        access: access as "public",
        addRandomSuffix: true,
        token,
      });
      results[access] = "OK";
      await del(blob.url, { token }).catch(() => {});
    } catch (error) {
      results[access] = `FAILED: ${error instanceof Error ? error.message : String(error)}`;
    }
  }

  return NextResponse.json(results);
}