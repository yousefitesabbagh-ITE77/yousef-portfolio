// Run against a running dev server:
// PORTFOLIO_URL=https://... CHROMIUM_PATH=/path/to/chromium node scripts/check-portfolio.mjs
import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
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

  for (const width of [320, 375, 414, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto(baseUrl);
    await page.locator("h1").waitFor();
    await page.waitForTimeout(1800);
    const overflow = await page.evaluate(() => {
      const nodes = [...document.querySelectorAll("main *")];
      return nodes.filter((element) => {
        const bounds = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        // An animated marquee is intentionally clipped inside its own viewport.
        if (element.closest('[data-marquee]')) return false;
        // Decorative absolute-positioned glows intentionally extend past sections.
        return bounds.width > 0 && style.position !== "absolute" &&
          style.position !== "fixed" && style.display !== "none" &&
          (bounds.right > innerWidth + 1 || bounds.left < -1);
      }).map((element) => `${element.tagName}: ${element.textContent.slice(0, 60)}`);
    });
    assert.deepEqual(overflow, [], `Content overflow at ${width}px`);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
    assert.deepEqual(await page.locator("section[id]").evaluateAll((sections) => sections.map((section) => section.id)), ["home", "projects", "services", "process", "expertise", "experience", "about", "contact"]);

    if (await page.getByRole("button", { name: "Toggle navigation menu" }).isVisible()) {
      await page.getByRole("button", { name: "Toggle navigation menu" }).click();
      const mobileDownload = page.locator("header a[download]").last();
      assert.equal(await mobileDownload.isVisible(), true);
      const downloaded = page.waitForEvent("download");
      await mobileDownload.click();
      assert.equal((await downloaded).suggestedFilename(), "Yousef_Sabbagh_CV.pdf");
      await expect(page.getByRole("button", { name: "Toggle navigation menu" })).toHaveAttribute("aria-expanded", "false");
    } else {
      assert.equal(await page.locator("header a[download]").first().isVisible(), true);
    }
    assert.equal(await page.locator("#home a[download]").isVisible(), true);
    console.log(`PASS ${width}px: all sections fit, CV links available`);
  }

  // Smooth anchors land beneath the fixed header and update active navigation.
  await expect(page.locator("html")).toHaveClass(/lenis/);
  await page.locator('.site-header a[href="#expertise"]').first().click();
  await expect.poll(() => page.evaluate(() => Math.round(document.getElementById("expertise").getBoundingClientRect().top))).toBe(96);
  await expect(page.locator('.site-header a[href="#expertise"]').first()).toHaveAttribute("aria-current", "location");
  await expect(page.locator(".site-header")).toHaveClass(/is-scrolled/);
  await expect(page.locator(".expertise-card").first()).toHaveAttribute("data-reveal", "visible");

  // Screens crossfade on a four-second interval while in the viewport.
  const projectPreview = page.getByRole("button", { name: "Open TeamFlow image gallery" });
  await projectPreview.scrollIntoViewIfNeeded();
  const activeScreen = () => projectPreview.locator(".project-screenshot:not([aria-hidden='true'])").getAttribute("src");
  const firstScreen = await activeScreen();
  await expect.poll(activeScreen, { timeout: 6000 }).not.toBe(firstScreen);

  await page.getByRole("button", { name: "Open TeamFlow image gallery" }).click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor();
  await expect(dialog.getByRole("img").last()).toHaveAttribute("alt", "TeamFlow screen 1");
  await page.keyboard.press("ArrowRight");
  await expect(dialog.getByRole("img").last()).toHaveAttribute("alt", "TeamFlow screen 2");
  await page.keyboard.press("ArrowLeft");
  await dialog.getByRole("button", { name: "Previous image" }).click();
  await expect(dialog.getByRole("img").last()).toHaveAttribute("alt", "TeamFlow screen 6");
  await dialog.getByRole("button", { name: "Next image" }).click();
  await expect(dialog.getByRole("img").last()).toHaveAttribute("alt", "TeamFlow screen 1");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
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

  // Mobile swipe and modal focus/scroll behavior.
  await page.setViewportSize({ width: 375, height: 850 });
  await projectPreview.click();
  await dialog.dispatchEvent("touchstart", { touches: [{ identifier: 1, clientX: 280, clientY: 300 }], targetTouches: [{ identifier: 1, clientX: 280, clientY: 300 }] });
  await dialog.dispatchEvent("touchend", { changedTouches: [{ identifier: 1, clientX: 80, clientY: 300 }] });
  await expect(dialog.getByRole("img")).toHaveAttribute("alt", "TeamFlow screen 2");
  await dialog.dispatchEvent("touchstart", { touches: [{ identifier: 1, clientX: 80, clientY: 300 }], targetTouches: [{ identifier: 1, clientX: 80, clientY: 300 }] });
  await dialog.dispatchEvent("touchend", { changedTouches: [{ identifier: 1, clientX: 280, clientY: 300 }] });
  await expect(dialog.getByRole("img")).toHaveAttribute("alt", "TeamFlow screen 1");
  assert.equal(await page.evaluate(() => document.body.style.overflow), "hidden");
  await dialog.getByRole("button", { name: "Close gallery" }).click();
  await expect(projectPreview).toBeFocused();

  // Reduced-motion users get static decoration and simple fades, not scrolling
  // or pointer-driven effects. Anchor navigation remains functional.
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(baseUrl);
  await page.waitForTimeout(500);
  assert.equal(await page.locator("html").evaluate((element) => element.classList.contains("lenis")), false);
  assert.equal(await page.locator(".marquee-track").evaluate((element) => getComputedStyle(element).animationName), "none");
  assert.equal(await page.locator(".portrait-border").evaluate((element) => getComputedStyle(element).animationName), "none");
  assert.equal(await page.locator(".word-ghost").count(), 0);
  await page.getByRole("link", { name: "View my work" }).click();
  assert.ok(await page.locator("#projects").evaluate((element) => element.getBoundingClientRect().top >= 72));
  const reducedScreen = await activeScreen();
  await page.waitForTimeout(4300);
  assert.equal(await activeScreen(), reducedScreen);
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(page.locator(".stat-value").first()).toHaveText("5");
  await expect(page.locator(".experience-card")).toContainText("130+");
  assert.deepEqual(errors, []);
  console.log("PASS anchors, active nav, screenshot cycling, swipe gallery, focus restoration, reduced motion, downloads, WhatsApp, metadata, and browser errors");
} finally {
  await browser.close();
}
