// Manual asset generation only: node scripts/generate-og-image.mjs
// Not part of the development or Netlify build commands.
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07101f"/>
  <rect x="64" y="64" width="1072" height="502" rx="32" fill="#0a1426" stroke="#233854" stroke-width="2"/>
  <rect x="112" y="125" width="64" height="6" rx="3" fill="#38bdf8"/>
  <text x="112" y="265" fill="#ffffff" font-family="DejaVu Sans, sans-serif" font-size="72" font-weight="bold">Yousef Sabbagh</text>
  <text x="112" y="345" fill="#cbd5e1" font-family="DejaVu Sans, sans-serif" font-size="36">Full-Stack Developer · React · Laravel</text>
  <text x="112" y="490" fill="#7dd3fc" font-family="DejaVu Sans, sans-serif" font-size="30">yousefsabbagh.me</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL("../public/og-image.png", import.meta.url).pathname);
console.log("Generated public/og-image.png (1200×630)");
