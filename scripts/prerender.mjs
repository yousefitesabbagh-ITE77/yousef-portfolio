// Runs after `vite build` and the SSR build (see the "build" script).
// Injects the rendered page into dist/index.html so the HTML itself carries the content.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));
const { render } = await import(pathToFileURL(root("dist-ssr/entry-server.js")).href);

const html = render();
if (!html.includes("Ustazna")) throw new Error("Prerender output looks wrong: no project content");

const indexPath = root("dist/index.html");
const index = readFileSync(indexPath, "utf8");
if (!index.includes('<div id="root"></div>')) throw new Error("Root element not found in dist/index.html");
writeFileSync(indexPath, index.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
rmSync(root("dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${html.length.toLocaleString()} characters into dist/index.html`);
