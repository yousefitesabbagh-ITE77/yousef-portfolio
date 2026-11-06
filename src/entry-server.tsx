// Build-time render of the page, so crawlers that do not run JavaScript
// (most AI crawlers) still read the full content. Used by scripts/prerender.mjs.
import { renderToString } from "react-dom/server";
import App from "./App";

export function render() {
  return renderToString(<App />);
}
