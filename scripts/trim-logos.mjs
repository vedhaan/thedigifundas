import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const input = "public/client";
const output = "public/client-trimmed";

// Only the logos actually used in collaborations.ts
const files = [
  "Filiate.avif",
  "Haus_of_hetal.png",
  "housetalk_designs.png",
  "iblossom2.png",
  "Koncept.png",
  "Koncept_Print.png",
  "Mishthi_Art_Logo.png",
  "Moon_Logo.png",
  "jewels_haus.png",
  "jyoti_printerey.png",
  "Demilumi.png",
  "Lofy-Salon.png",
];

fs.mkdirSync(output, { recursive: true });

for (const file of files) {
  const from = path.join(input, file);
  if (!fs.existsSync(from)) {
    console.log(`MISSING: ${from}`);
    continue;
  }

  const outName = `${path.parse(file).name}.png`;
  try {
    const info = await sharp(from)
      .trim({ threshold: 15 })
      .png()
      .toFile(path.join(output, outName));
    console.log(`${file} -> ${outName} (${info.width}x${info.height})`);
  } catch (err) {
    console.log(`FAILED: ${file}: ${err.message}`);
  }
}