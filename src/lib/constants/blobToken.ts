// The store was connected with a custom env prefix, so Vercel created
// thedigifundasblob_READ_WRITE_TOKEN instead of BLOB_READ_WRITE_TOKEN,
// which is the only name the SDK looks for on its own.
export function getBlobToken(): string | undefined {
  return (
    process.env.BLOB_READ_WRITE_TOKEN ||
    process.env.thedigifundasblob_READ_WRITE_TOKEN
  );
}