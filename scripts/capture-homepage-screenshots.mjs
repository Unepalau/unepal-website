import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(process.cwd(), 'review-screenshots-v3');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Capturing Desktop screenshots (1440px)...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000); // Small buffer for animations

  // 01 Desktop Full
  await page.screenshot({ path: path.join(OUTPUT_DIR, '01-desktop-full.png'), fullPage: true });

  // 02 Desktop Hero (using #home)
  const hero = page.locator('#home');
  await hero.screenshot({ path: path.join(OUTPUT_DIR, '02-desktop-hero.png') });

  // 03 Desktop Features
  const features = page.locator('#features');
  await features.screenshot({ path: path.join(OUTPUT_DIR, '03-desktop-features.png') });

  // 04 Desktop Bazaar
  const bazaar = page.locator('#bazaar');
  await bazaar.screenshot({ path: path.join(OUTPUT_DIR, '04-desktop-bazaar.png') });

  // 05 Desktop Download
  const download = page.locator('#download');
  await download.screenshot({ path: path.join(OUTPUT_DIR, '05-desktop-download.png') });

  // 06 Desktop Contact
  const contact = page.locator('#contact');
  await contact.screenshot({ path: path.join(OUTPUT_DIR, '06-desktop-contact.png') });

  // 07 Desktop Footer
  const footer = page.locator('footer');
  await footer.screenshot({ path: path.join(OUTPUT_DIR, '07-desktop-footer.png') });

  console.log('Capturing Mobile screenshots (390px)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 08 Mobile Full
  await page.screenshot({ path: path.join(OUTPUT_DIR, '08-mobile-full.png'), fullPage: true });

  // 09 Mobile Hero
  await hero.screenshot({ path: path.join(OUTPUT_DIR, '09-mobile-hero.png') });

  // 10 Mobile Features
  await features.screenshot({ path: path.join(OUTPUT_DIR, '10-mobile-features.png') });

  // 11 Mobile Download/Contact
  // Since user asked for "download-contact", we can take a screenshot of the download section which is often near contact on mobile
  // Or we can try to capture both if they are close, but taking #download is safer.
  await download.screenshot({ path: path.join(OUTPUT_DIR, '11-mobile-download-contact.png') });

  console.log('Capturing Tablet screenshots (768px)...');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 12 Tablet Full
  await page.screenshot({ path: path.join(OUTPUT_DIR, '12-tablet-full.png'), fullPage: true });

  await browser.close();
  console.log('Screenshots saved to review-screenshots-v3/');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
