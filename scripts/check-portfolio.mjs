// Run against a running dev server:
// PORTFOLIO_URL=https://... CHROMIUM_PATH=/path/to/chromium node scripts/check-portfolio.mjs
import assert from "node:assert/strict";
import { chromium } from "@playwright/test";
import sharp from "sharp";

const baseUrl = process.env.PORTFOLIO_URL;
assert.ok(baseUrl, "Set PORTFOLIO_URL to the running portfolio URL");
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  headless: true,
});
try {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const width of [320, 375, 414, 1024, 1280]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto(baseUrl);
    await page.locator("h1").waitFor();
    const overflow = await page.evaluate(() => {
      const nodes = [...document.querySelectorAll("main *")];
      return nodes.filter((element) => {
        const bounds = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        // Decorative absolute-positioned glows intentionally extend past sections.
        return bounds.width > 0 && style.position !== "absolute" &&
          style.position !== "fixed" && style.display !== "none" &&
          (bounds.right > innerWidth + 1 || bounds.left < -1);
      }).map((element) => `${element.tagName}: ${element.textContent.slice(0, 60)}`);
    });
    assert.deepEqual(overflow, [], `Content overflow at ${width}px`);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
    assert.equal(await page.locator("section").count(), 6);

    if (width < 640) {
      await page.getByRole("button", { name: "Toggle navigation menu" }).click();
      const mobileDownload = page.locator("header a[download]").last();
      assert.equal(await mobileDownload.isVisible(), true);
      const downloaded = page.waitForEvent("download");
      await mobileDownload.click();
      assert.equal((await downloaded).suggestedFilename(), "Yousef_Sabbagh_CV.pdf");
      assert.equal(await page.getByRole("button", { name: "Toggle navigation menu" }).getAttribute("aria-expanded"), "false");
    } else {
      assert.equal(await page.locator("header a[download]").first().isVisible(), true);
    }
    assert.equal(await page.locator("#home a[download]").isVisible(), true);
    console.log(`PASS ${width}px: all sections fit, CV links available`);
  }

  await page.getByRole("button", { name: "Open TeamFlow image gallery" }).click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor();
  assert.equal(await dialog.getByRole("img").getAttribute("alt"), "TeamFlow screen 1");
  await page.keyboard.press("ArrowRight");
  assert.equal(await dialog.getByRole("img").getAttribute("alt"), "TeamFlow screen 2");
  await page.keyboard.press("ArrowLeft");
  await dialog.getByRole("button", { name: "Previous image" }).click();
  assert.equal(await dialog.getByRole("img").getAttribute("alt"), "TeamFlow screen 6");
  await dialog.getByRole("button", { name: "Next image" }).click();
  assert.equal(await dialog.getByRole("img").getAttribute("alt"), "TeamFlow screen 1");
  await page.keyboard.press("Escape");
  assert.equal(await dialog.count(), 0);
  assert.equal(await page.evaluate(() => document.body.style.overflow), "");

  const whatsapp = page.getByRole("link", { name: "Chat with Yousef on WhatsApp" });
  assert.equal(await whatsapp.getAttribute("href"), "https://wa.me/963984454517?text=Hi%20Yousef%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20about%20a%20project.");
  const pdf = await page.request.get(new URL("/Yousef_Sabbagh_CV.pdf", baseUrl).href);
  assert.equal(pdf.status(), 200);
  assert.equal((await pdf.body()).subarray(0, 5).toString(), "%PDF-");
  const og = await page.request.get(new URL("/og-image.png", baseUrl).href);
  const metadata = await sharp(await og.body()).metadata();
  assert.equal(metadata.width, 1200);
  assert.equal(metadata.height, 630);
  assert.equal(await page.locator('meta[name="twitter:card"]').getAttribute("content"), "summary_large_image");
  assert.equal(await page.locator('meta[property="og:image"]').getAttribute("content"), "https://yousefsabbagh.me/og-image.png");
  const person = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  assert.equal(person["@type"], "Person");
  assert.equal(person.name, "Yousef Sabbagh");
  assert.equal(person.sameAs.length, 2);
  assert.deepEqual(errors, []);
  console.log("PASS gallery, downloads, WhatsApp, social image, metadata, and browser errors");
} finally {
  await browser.close();
}
