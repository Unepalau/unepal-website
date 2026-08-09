# uNepal cinematic editorial landing page — design QA

## Evidence

- Source visual truth, selected option 1: `C:\Users\manoj\.codex\generated_images\019fd406-e0bb-7093-9808-27d822a90518\exec-019640e0-e774-4863-90e2-13901cc79cbd.png` (1536 × 1024 px).
- Source visual truth, selected option 2: `C:\Users\manoj\.codex\generated_images\019fd406-e0bb-7093-9808-27d822a90518\exec-e380bd3e-edb8-4ca9-ad15-89f563ab3454.png` (1536 × 1024 px).
- Desktop implementation: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-hybrid-desktop.png` (1425 × 1013 px capture from a 1440 × 1024 CSS viewport at device scale factor 1).
- Mobile implementation: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-hybrid-mobile.png` (375 × 812 px capture from a 390 × 844 CSS viewport at device scale factor 1).
- Full-view combined comparison: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-hybrid-comparison.png` (the two selected sources and final desktop implementation on one 4320 × 1024 canvas).
- Focused discovery evidence: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-hybrid-discovery.png`.
- Focused Bazaar evidence: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\qa-hybrid-bazaar.png`.

## Comparison state and normalization

- Desktop state: public homepage at the top of the page, 1440 × 1024 CSS viewport, default Places discovery state, no browser chrome included.
- Mobile state: public homepage, 390 × 844 CSS viewport, closed navigation menu.
- Both 1536 × 1024 source images were proportionally scaled to 1440 × 960 and centered in equal-width comparison slots. The implementation retained its 1425 × 1013 captured pixel size inside the third 1440 × 1024 slot. All inputs use density 1, so no density resampling was required beyond the comparison-canvas fit.
- Focused captures were used because the three visual chapters and full-width Bazaar banner are too small to judge accurately in the full-page comparison alone.

## Findings

- No actionable P0, P1, or P2 differences remain.
- Fonts and typography: passed. Newsreader recreates the selected editorial serif character while Noto Sans keeps controls and body copy crisp. Display size, italic emphasis, line height, tracking, and mobile wrapping preserve the intended hierarchy.
- Spacing and layout rhythm: passed. The implementation combines option 1's image-dominant hero and lower dock with option 2's broad discovery rows. Desktop margins, hero radius, dock placement, section gaps, and mobile stacking remain stable without horizontal overflow.
- Colors and visual tokens: passed. Warm white, parchment, vermilion, deep blue, and small green/amber status accents match the selected direction without returning to a dark or overly colorful page.
- Image quality and asset fidelity: passed. All major visual surfaces use purpose-generated raster assets at their intended crops. The exact supplied uNepal symbol is used in the header and footer. Phosphor provides a single consistent icon family; no CSS art, handcrafted SVGs, emoji, placeholders, full app screenshots, or screenshot wall are used.
- Copy and content: passed. The site says “Nepalese,” represents Nepalese people broadly, presents Android 5.0.5 as available, presents iOS 5.0.5 as Waiting for Review, and includes no fabricated ratings, testimonials, awards, or user counts.
- Responsive behavior: passed at 1440 × 1024 and 390 × 844. Hero artwork, CTA, discovery controls, chapter imagery, and Bazaar copy remain readable and usable. The mobile navigation opens, closes after a navigation choice, and scrolls to the selected section.
- Accessibility: passed for the implemented scope. Landmarks, headings, button/link names, image alternatives, keyboard focus styling, status text, reduced-motion handling, and practical mobile tap targets are present.
- Browser console: no errors. Development-only React and HMR messages were observed; no runtime exception was present.

## Interaction checks

- Primary header navigation and all homepage anchors work.
- Mobile menu opens, reports its expanded state, closes on selection, and navigates to the chosen section.
- The five discovery controls update the selected state and prompt, then scroll to their relevant section.
- Android and iOS download links use the existing store destinations and preserve the correct public release wording.

## Comparison history

1. P2 — brand lockup scale: the first browser render stretched the square supplied logo into the wordmark slot. Fixed by rendering the exact square symbol at its natural aspect ratio and pairing it with a clean text lockup. The revised header is compact and aligned to both source targets.
2. P2 — repeated discovery artwork: the first implementation showed the left chapter crop in all three panels. Fixed by positioning the single generated triptych at 0%, -100%, and -200% so each chapter now shows its intended Community, Discover, and Watch scene.
3. P2 — desktop/mobile resilience: verified after the fixes at both target viewports. No overlap or horizontal overflow remains, the mobile menu interaction passes, and focused visual captures confirm correct imagery and content.

## Follow-up polish

- P3 — the implementation uses one lightweight community moment in the hero instead of the several floating product snippets in option 1. This is intentional: it combines the restraint requested by the user with option 2's clearer discovery control.

final result: passed
