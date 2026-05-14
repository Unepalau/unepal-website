import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const dir = path.join(process.cwd(), 'review-screenshots-v4');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const viewports = [
    { name: 'desktop', width: 1536, height: 1080 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 390, height: 844 }
  ];

  const BASE_URL = 'http://localhost:3000';

  console.log('Capturing Desktop screenshots...');
  await page.setViewportSize(viewports[0]);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000); // Wait for animations

  // 01 Desktop Full
  await page.screenshot({ path: path.join(dir, '01-desktop-full.png'), fullPage: true });

  // 02 Desktop Hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(dir, '02-desktop-hero.png') });

  // 03 Desktop Features
  await page.locator('#features').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(dir, '03-desktop-features.png') });

  // 04 Desktop Bazaar
  await page.locator('#bazaar').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(dir, '04-desktop-bazaar.png') });

  // 05 Desktop Download
  await page.locator('#download').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(dir, '05-desktop-download.png') });

  // 06 Desktop Contact
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(dir, '06-desktop-contact.png') });

  console.log('Capturing Mobile screenshots...');
  await page.setViewportSize(viewports[2]);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(dir, '07-mobile-full.png'), fullPage: true });

  console.log('Capturing Tablet screenshots...');
  await page.setViewportSize(viewports[1]);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(dir, '08-tablet-full.png'), fullPage: true });

  await browser.close();
  console.log(`All screenshots saved to ${dir}`);
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
