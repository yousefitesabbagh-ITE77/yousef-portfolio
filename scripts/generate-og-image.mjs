// Manual asset generation only: node scripts/generate-og-image.mjs
// Not part of the development or Netlify build commands.
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07101f"/>
  <rect x="64" y="64" width="1072" height="502" rx="32" fill="#0a1426" stroke="#233854" stroke-width="2"/>
  <g transform="translate(112 96) scale(1.9)">
    <rect x="0" y="0" width="40" height="40" rx="9" fill="#0d192b" stroke="#25344d" stroke-width="1"/>
    <path d="M11 9 L20 20 M29 9 L20 20" stroke="#94a6bf" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M20 20 L20 31" stroke="#6195ff" stroke-width="3.6" stroke-linecap="round"/>
  </g>
  <text x="112" y="265" fill="#ffffff" font-family="DejaVu Sans, sans-serif" font-size="72" font-weight="bold">Yousef Sabbagh</text>
  <text x="112" y="345" fill="#cbd5e1" font-family="DejaVu Sans, sans-serif" font-size="36">Product-minded builder · Discovery · MVPs</text>
  <text x="112" y="490" fill="#7dd3fc" font-family="DejaVu Sans, sans-serif" font-size="30">yousefsabbagh.me</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL("../public/og-image.png", import.meta.url)));
console.log("Generated public/og-image.png (1200×630)");
