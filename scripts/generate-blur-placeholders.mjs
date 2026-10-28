// Generates tiny blurred previews for local images, shown by next/image
// while the full image loads (placeholder="blur").
//
//   npm run images:blur
//
// Re-run after adding or replacing images in the folders below, then
// commit the updated src/lib/blur-placeholders.json.

import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const outFile = path.join(root, "src/lib/blur-placeholders.json");

// Every image the site renders (og-image.png is only for link previews)
const sources = ["profile.png", "projects", "tech", "logos"];

async function collect(rel) {
  const full = path.join(publicDir, rel);
  if (/\.(png|jpe?g|webp)$/i.test(rel)) return [rel];
  const entries = await readdir(full, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => collect(path.join(rel, e.name)))
  );
  return nested.flat();
}

const files = (await Promise.all(sources.map(collect))).flat().sort();
const placeholders = {};

for (const file of files) {
  const image = sharp(path.join(publicDir, file));
  const { isOpaque } = await image.stats();
  // 16px wide keeps each preview to a few hundred bytes; WebP keeps alpha
  const { data, info } = await image
    .resize(16)
    .webp({ quality: 60 })
    .toBuffer({ resolveWithObject: true });
  const webp = `data:image/webp;base64,${data.toString("base64")}`;
  const key = "/" + file.split(path.sep).join("/");

  // Wrap the preview in an SVG blur. Opaque images (screenshots) repeat
  // their edge pixels so the blur stays a full rectangle. Transparent ones
  // (the profile cut-out, logos) keep their transparency, plus a radial
  // mask fading them out towards the borders, so content that runs off the
  // image edge (e.g. shoulders) doesn't end in a hard blurred line.
  const blur = isOpaque
    ? `<filter id='b' color-interpolation-filters='sRGB'><feGaussianBlur stdDeviation='0.6' edgeMode='duplicate'/></filter>`
    : `<filter id='b' color-interpolation-filters='sRGB'><feGaussianBlur stdDeviation='0.6'/></filter>` +
      `<radialGradient id='g'><stop offset='0.6' stop-color='white'/><stop offset='1' stop-color='black'/></radialGradient>` +
      `<mask id='m'><rect width='100%' height='100%' fill='url(#g)'/></mask>`;

  placeholders[key] =
    "data:image/svg+xml," +
    // Single quotes + escaping only what a data URL needs keeps the
    // already-base64 WebP inside from being encoded a second time
    (
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${info.width} ${info.height}'>` +
      blur +
      `<image width='100%' height='100%' preserveAspectRatio='none' filter='url(#b)'${isOpaque ? "" : " mask='url(#m)'"} href='${webp}'/>` +
      `</svg>`
    ).replace(/[%#<>]/g, encodeURIComponent);
}

await writeFile(outFile, JSON.stringify(placeholders, null, 2) + "\n");
console.log(`Wrote ${files.length} blur placeholders to ${path.relative(root, outFile)}`);
