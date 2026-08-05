import { access, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const out = path.join(root, "out");
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function read(relativePath) {
  return readFile(path.join(out, relativePath), "utf8");
}

const expectedRouteFiles = [
  "index.html",
  "download.html",
  "community.html",
  "privacy.html",
  "terms.html",
  "child-safety-standards.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
  "app-ads.txt",
  ".well-known/assetlinks.json",
  ".well-known/apple-app-site-association",
];

for (const routeFile of expectedRouteFiles) {
  try {
    await access(path.join(out, routeFile));
  } catch {
    failures.push(`Missing static export file: ${routeFile}`);
  }
}

const indexHtml = await read("index.html");
const requiredAnchors = [
  "features",
  "community",
  "community-spaces",
  "bazaar",
  "hamro-tv",
  "business",
  "events",
  "profiles",
  "safety",
  "contact",
];

for (const anchor of requiredAnchors) {
  const matches =
    indexHtml.match(new RegExp(`id=["']${anchor}["']`, "g")) ?? [];
  check(
    matches.length === 1,
    `Homepage anchor #${anchor} appears ${matches.length} times.`,
  );
}

const homepageHashLinks = [
  ...indexHtml.matchAll(/href=["']\/?#([^"']+)["']/g),
].map((match) => match[1]);

for (const anchor of new Set(homepageHashLinks)) {
  check(
    new RegExp(`id=["']${anchor}["']`).test(indexHtml),
    `Homepage link points to missing anchor #${anchor}.`,
  );
}

const canonicalHref = indexHtml.match(
  /<link rel=["']canonical["'] href=["']([^"']+)["']\/?>/,
)?.[1];
check(
  canonicalHref && new URL(canonicalHref).href === "https://www.unepal.com/",
  "Root canonical URL is missing or incorrect.",
);
check(
  indexHtml.includes('og:image:width" content="1200"'),
  "OG width is not 1200.",
);
check(
  indexHtml.includes('og:image:height" content="630"'),
  "OG height is not 630.",
);
check(
  indexHtml.includes("/assets/og-image.png"),
  "New social image is not referenced.",
);
check(
  !indexHtml.includes("/assets/hero-mockup.jpg"),
  "Legacy portrait social image is still referenced.",
);
check(
  !indexHtml.includes("/api/contact"),
  "Static homepage still expects /api/contact.",
);
check(
  !indexHtml.includes("aggregateRating"),
  "Unsupported aggregate rating structured data found.",
);
check(
  !indexHtml.includes("4.8 rating"),
  "Unsupported illustrative business rating found.",
);

const socialMetadata = await sharp(
  path.join(out, "assets", "og-image.png"),
).metadata();
check(
  socialMetadata.width === 1200 && socialMetadata.height === 630,
  `Social image is ${socialMetadata.width}x${socialMetadata.height}, expected 1200x630.`,
);

const manifest = JSON.parse(await read("manifest.webmanifest"));
check(
  manifest.name === "uNepal — Hamro Social Network",
  "Manifest name is incorrect.",
);
check(manifest.short_name === "uNepal", "Manifest short_name is incorrect.");
check(manifest.start_url === "/", "Manifest start_url is incorrect.");
check(manifest.display === "standalone", "Manifest display is incorrect.");

const firebaseConfig = JSON.parse(
  await readFile(path.join(root, "firebase.json"), "utf8"),
);
const privacyRedirect = firebaseConfig.hosting.redirects.find(
  (redirect) => redirect.source === "/privacy.html",
);
check(
  privacyRedirect?.destination === "/privacy" && privacyRedirect?.type === 301,
  "Firebase /privacy.html compatibility redirect is missing or incorrect.",
);

try {
  await access(path.join(out, "api", "contact"));
  failures.push("Static export unexpectedly contains an /api/contact route.");
} catch {
  // Expected: the static site uses the verified Firebase Function instead.
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(
  `Validated ${expectedRouteFiles.length} static files, ${requiredAnchors.length} anchors, metadata, manifest, social image, and Firebase compatibility redirect.`,
);
