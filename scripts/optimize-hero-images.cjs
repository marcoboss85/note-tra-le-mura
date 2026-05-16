/**
 * Hero WebP: da JPG sorgente oppure ricompressione dei .webp esistenti.
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

const WEBP_QUALITY = 76;
const MAX_SIDE = 1920;

async function optimizeWebp(inPath, outPath) {
  await sharp(inPath)
    .resize({
      width: MAX_SIDE,
      height: MAX_SIDE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY, effort: 6, smartSubsample: true })
    .toFile(outPath);
}

async function main() {
  for (const { input, output } of jobs) {
    const inPath = path.join(publicDir, input);
    const outPath = path.join(publicDir, output);
    const webpSource = outPath;

    let sourcePath = null;
    if (fs.existsSync(inPath)) {
      sourcePath = inPath;
    } else if (fs.existsSync(webpSource)) {
      sourcePath = webpSource;
    } else {
      console.warn("Salto (manca):", input, "e", output);
      continue;
    }

    const before = fs.statSync(sourcePath).size;
    const tmpPath = `${outPath}.tmp`;
    await optimizeWebp(sourcePath, tmpPath);
    fs.renameSync(tmpPath, outPath);
    const after = fs.statSync(outPath).size;
    console.log(
      `${output}\t${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB (q${WEBP_QUALITY})`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
