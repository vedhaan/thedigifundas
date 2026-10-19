import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const input = "public/client";
const output = "public/client-trimmed";
fs.mkdirSync(output, { recursive: true });

for (const file of fs.readdirSync(input)) {
  if (!/\.(png|jpe?g|webp|avif)$/i.test(file)) continue;

  // Normalised name: no spaces, lowercase, always .png
  const name = path.parse(file).name.replace(/\s+/g, "_").toLowerCase();

  const info = await sharp(path.join(input, file))
    .trim({ threshold: 15 })
    .png()
    .toFile(path.join(output, `${name}.png`));

  console.log(`${file} -> ${name}.png (${info.width}x${info.height})`);
}