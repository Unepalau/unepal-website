import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetsDirectory = path.join(root, "public", "assets");
const logoPath = path.join(assetsDirectory, "logo.png");
const logo = await readFile(logoPath);

await mkdir(assetsDirectory, { recursive: true });

const socialArtwork = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="background" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop stop-color="#071632"/>
        <stop offset="1" stop-color="#102A5C"/>
      </linearGradient>
      <radialGradient id="redGlow" cx="0" cy="0" r="1" gradientTransform="translate(1100 36) rotate(136) scale(430 360)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E60023" stop-opacity="0.52"/>
        <stop offset="1" stop-color="#E60023" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#background)"/>
    <rect width="1200" height="630" fill="url(#redGlow)"/>
    <circle cx="1054" cy="512" r="210" fill="#E60023" fill-opacity="0.13"/>
    <circle cx="1060" cy="512" r="146" fill="none" stroke="#FFFFFF" stroke-opacity="0.09" stroke-width="2"/>
    <rect x="90" y="92" width="4" height="446" rx="2" fill="#E60023"/>
    <text x="410" y="166" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700">uNepal</text>
    <text x="410" y="212" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="600" letter-spacing="1.5">HAMRO SOCIAL NETWORK</text>
    <text x="410" y="336" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800">Nepal’s digital community,</text>
    <text x="410" y="407" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800">all in one place.</text>
    <text x="410" y="481" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="600">Built for Nepalese communities everywhere.</text>
  </svg>
`);

const socialLogo = await sharp(logo)
  .resize(248, 248, { fit: "contain", withoutEnlargement: true })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: "#071632",
  },
})
  .composite([
    { input: socialArtwork, left: 0, top: 0 },
    { input: socialLogo, left: 128, top: 190 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(assetsDirectory, "og-image.png"));

for (const size of [192, 512]) {
  await sharp(logo)
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(assetsDirectory, `manifest-icon-${size}.png`));
}

console.log("Generated 1200x630 social image and 192/512 manifest icons.");
