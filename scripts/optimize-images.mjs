// scripts/optimize-images.mjs
// Optimise les images de src/assets : redimensionne (max 1600 px sur le grand
// côté) et recompresse, en conservant le nom ET le format de chaque fichier
// (aucun import à modifier). N'écrase que si le résultat est plus léger.
//
// Lancer avec : npm run optimize:images

import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, "..", "src", "assets");

const MAX_DIM = 1600; // px sur le plus grand côté
const MIN_SIZE_TO_TOUCH = 300 * 1024; // on ignore les fichiers < 300 Ko
const RASTER = new Set([".png", ".jpg", ".jpeg"]);

const fmt = (b) => (b / 1024).toFixed(0).padStart(5) + " Ko";

async function run() {
  const files = await readdir(ASSETS_DIR);
  let savedTotal = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!RASTER.has(ext)) continue;

    const full = path.join(ASSETS_DIR, file);
    const before = (await stat(full)).size;
    if (before < MIN_SIZE_TO_TOUCH) continue;

    const input = await readFile(full);
    let pipeline = sharp(input).rotate(); // respecte l'orientation EXIF

    const meta = await sharp(input).metadata();
    if (Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_DIM) {
      pipeline = pipeline.resize({
        width: MAX_DIM,
        height: MAX_DIM,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    if (ext === ".png") {
      pipeline = pipeline.png({ compressionLevel: 9, effort: 10, quality: 82, palette: true });
    } else {
      pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
    }

    const output = await pipeline.toBuffer();

    if (output.length < before) {
      await writeFile(full, output);
      const saved = before - output.length;
      savedTotal += saved;
      console.log(`✓ ${file.padEnd(34)} ${fmt(before)} -> ${fmt(output.length)}  (-${fmt(saved)})`);
    } else {
      console.log(`· ${file.padEnd(34)} déjà optimal (${fmt(before)})`);
    }
  }

  console.log(`\nTotal économisé : ${(savedTotal / 1024 / 1024).toFixed(2)} Mo`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
