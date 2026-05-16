/**
 * Converte le immagini hero Lucca Comics in WebP leggeri.
 * Esegui: node scripts/optimize-comics-images.cjs
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const comicsDir = path.join(__dirname, "..", "public", "lucca-comics");

const jobs = [
  { input: "comics 1.png", output: "comics-1.webp" },
  { input: "comics 2.jpg", output: "comics-2.webp" },
  { input: "comics 3.jpg", output: "comics-3.webp" },
];

async function main() {
  for (const { input, output } of jobs) {
    const inPath = path.join(comicsDir, input);
    const outPath = path.join(comicsDir, output);
    if (!fs.existsSync(inPath)) {
      console.warn("Salto (manca):", input);
      continue;
    }
    const before = fs.statSync(inPath).size;
    await sharp(inPath)
      .resize({
        width: 1920,
        height: 1920,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 78, effort: 6, smartSubsample: true })
      .toFile(outPath);
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
