# uNepal app-first landing page — design QA

## Evidence

- Selected direction 1: `C:\Users\manoj\.codex\generated_images\019fd406-e0bb-7093-9808-27d822a90518\exec-019640e0-e774-4863-90e2-13901cc79cbd.png`.
- Selected direction 2: `C:\Users\manoj\.codex\generated_images\019fd406-e0bb-7093-9808-27d822a90518\exec-e380bd3e-edb8-4ca9-ad15-89f563ab3454.png`.
- Final desktop implementation: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-app-first-desktop.png`, captured at a 1440 × 1024 CSS viewport.
- Final mobile implementation: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-app-first-mobile.png`, captured at a 390 × 844 CSS viewport.
- Combined visual comparison: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-app-first-comparison.png`.

## Comparison state

- Desktop: homepage at the top, navigation closed, Community selected in the product preview.
- Mobile: homepage at the top, navigation closed, 390 × 844 responsive viewport.
- The two selected visual directions and the final desktop capture were placed in one normalized comparison image and reviewed together.

## Findings

- No actionable P0, P1, or P2 visual differences remain.
- App-first hierarchy: passed. The first viewport now leads with a real uNepal home feed, visible product widgets, clear feature cues, and direct store calls to action. The Nepal lifestyle image supports the product story in a secondary full-width banner instead of replacing the app experience.
- Store presentation: passed. The official black App Store badge and official Google Play badge artwork are displayed at matched visual height with their original shapes, colors, typography, and platform marks. No version numbers or release-review labels are shown.
- Product evidence: passed. One real uNepal app surface is shown in the hero. A single interactive preview below switches between Community, Bazaar, Hamro TV, and Events, so the page demonstrates the real product without becoming a screenshot wall.
- Typography: passed. The landing page uses a compact, modern sans-serif display system with strong weight and restrained red/blue emphasis. The former editorial serif treatment was removed from the primary product story.
- Color and depth: passed. The page remains bright, using warm white, soft blue, pale rose, and limited uNepal red. Rounded product surfaces, quiet borders, glass widgets, and soft shadows add polish without returning to a dark or overly colorful theme.
- Responsive behavior: passed at 1440 × 1024 and 390 × 844. The hero, product stage, store badges, feature tabs, app preview, card grid, download area, and footer stack cleanly without visible clipping or overlap.
- Accessibility: passed for the implemented scope. Landmarks, heading order, descriptive image alternatives, labelled navigation, labelled store destinations, reduced-motion handling, practical touch targets, mobile menu expanded state, and tab/tabpanel relationships are present.
- Content safety: passed. The site consistently says “Nepalese,” presents uNepal for all Nepalese people, and includes no fabricated ratings, testimonials, awards, or user counts.
- Browser console: passed. No runtime errors or warnings were present during final interaction checks.

## Interaction checks

- Header anchors navigate to the intended homepage sections.
- Mobile menu opens, reports `aria-expanded="true"`, and exposes the mobile navigation.
- The product tabs update their selected state, copy, icon, and real app image; Bazaar was explicitly tested in-browser.
- Both store badges link to the existing uNepal store destinations.
- Download and product CTA links remain usable with JavaScript enabled or disabled because they are ordinary anchors.

## Comparison history

1. P1 — the previous first viewport looked like a Nepal campaign page because the app itself was absent. Fixed by replacing the image-led hero with a real app-led product stage.
2. P1 — generic custom download cards did not read as trusted store calls to action. Fixed with official Apple and Google badge artwork.
3. P2 — the earlier page relied on broad editorial storytelling and hid product depth below the fold. Fixed by moving the real home feed above the fold and adding a focused interactive product showcase.
4. P2 — at 390 px the store badges initially stacked vertically. Fixed by retaining the compact side-by-side arrangement down to 351 px and stacking only on very narrow screens.

final result: passed
