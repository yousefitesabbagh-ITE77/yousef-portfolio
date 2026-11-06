// Manual asset generation only: node scripts/generate-icons.mjs
// Builds the favicon set from the forked-Y logo. Not part of the Netlify build.
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const pub = (file) => new URL(`../public/${file}`, import.meta.url);

// Small sizes get thicker strokes so the mark stays readable.
const icon = (small) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#07101f"/>
  <rect x="3" y="3" width="58" height="58" rx="12" fill="#0d192b" stroke="#25344d" stroke-width="2"/>
  <path d="M17 14 L32 32 M47 14 L32 32" stroke="#94a6bf" stroke-width="${small ? 8 : 6}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32 32 L32 50" stroke="#6195ff" stroke-width="${small ? 8 : 6}" stroke-linecap="round"/>
</svg>`;

writeFileSync(pub("favicon.svg"), icon(false));

const sizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "favicon-48x48.png": 48,
  "favicon-64x64.png": 64,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};
const pngs = {};
for (const [file, size] of Object.entries(sizes)) {
  const png = await sharp(Buffer.from(icon(size <= 32)), { density: 72 * (size / 64) * 4 })
    .resize(size, size)
    .png()
    .toBuffer();
  writeFileSync(pub(file), png);
  pngs[size] = png;
}

// favicon.ico holding the 16, 32 and 48 px PNGs.
const entries = [16, 32, 48].map((size) => ({ size, data: pngs[size] }));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(entries.length, 4);
let offset = 6 + 16 * entries.length;
const dir = entries.map(({ size, data }) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(size, 0);
  e.writeUInt8(size, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(data.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += data.length;
  return e;
});
writeFileSync(pub("favicon.ico"), Buffer.concat([header, ...dir, ...entries.map((e) => e.data)]));
console.log("Generated favicon.svg, favicon.ico and PNG icons");
