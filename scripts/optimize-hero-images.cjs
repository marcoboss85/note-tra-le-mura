/**
 * Genera WebP leggeri per la hero (max 1920px lato lungo, qualità 80).
 * Esegui: node scripts/optimize-hero-images.cjs
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

const jobs = [
  { input: "foto sfondo.jpg", output: "foto-sfondo.webp" },
  { input: "sfondo2.jpg", output: "sfondo-2.webp" },
  { input: "sfondo 3.jpg", output: "sfondo-3.webp" },
  { input: "sofndo 4.jpg", output: "sofndo-4.webp" },
];

async function main() {
  for (const { input, output } of jobs) {
    const inPath = path.join(publicDir, input);
    const outPath = path.join(publicDir, output);
    if (!fs.existsSync(inPath)) {
      console.warn("Salto (manca):", input);
      continue;
    }
    await sharp(inPath)
      .resize({
        width: 1920,
        height: 1920,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80, effort: 6, smartSubsample: true })
      .toFile(outPath);

    const before = fs.statSync(inPath).size;
    const after = fs.statSync(outPath).size;
    console.log(
      `${output}\t${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024).toFixed(0)} KB`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
