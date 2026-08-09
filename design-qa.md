# uNepal premium landing redesign — design QA

## Evidence

- Source visual truth:
  - `C:\tmp\unepal-home-master.png` (1080 × 2400)
  - `C:\tmp\unepal-community-master.png` (1080 × 2400)
  - `C:\tmp\unepal-groups-directory-master.png` (1080 × 2400)
  - `C:\tmp\unepal-bazaar-master.png` (1080 × 2400)
  - `C:\tmp\unepal-hamro-tv-master.png` (1080 × 2400)
  - `C:\tmp\unepal-business-master.png` (1080 × 2400)
  - `C:\tmp\unepal-calendar-master.png` (1080 × 2400)
- Final implementation screenshots:
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-final-desktop-1440x900.png`
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-final-mobile-390x844.png`
- Full-view combined comparison evidence:
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\design-qa-final-desktop-comparison.png`
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\design-qa-final-mobile-comparison.png`
- Focused combined comparison evidence:
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\design-qa-community-focused-comparison.png`

## Normalization

- Desktop CSS viewport: 1440 × 900, device scale factor 1. Chrome rendered the site inside a same-origin 1440 × 900 QA frame; Chrome capture scaling was normalized back to 1440 × 900 pixels.
- Mobile CSS viewport: 390 × 844, device scale factor 1. The final screenshot is 390 × 844 pixels with the test-only desktop scrollbar hidden so the content viewport remains exactly 390 pixels wide.
- Source Android captures were downsampled from 1080 × 2400 only for the combined comparison canvases. Committed app UI assets retain the original composition in optimized WebP derivatives.
- State: public, unauthenticated landing page; light theme; initial hero state. Focused evidence covers the public Community state.

## Required fidelity surfaces

- Fonts and typography: passed. The site self-hosts the app's Noto Sans variable font for body/UI text and Urbanist for display copy. Weight, line height, wrapping, and hierarchy remain legible at both requested viewports.
- Spacing and layout rhythm: passed. Hero balance, section spacing, card radii, borders, shadows, and responsive stacking use the measured app token system. No horizontal overflow remains at 390 or 1440 pixels.
- Colors and visual tokens: passed. The rendered palette maps to the app's `#E60023`, `#003893`, `#0B4EA2`, `#071632`, `#F3F4F6`, `#E4E6EB`, and related semantic colors.
- Image quality and asset fidelity: passed. Visible product imagery is derived from privacy-reviewed physical-device captures; the logo, icons, and fonts are exact app assets. WebP compression remains sharp at the rendered sizes.
- Copy and content: passed. Copy is concise, presents uNepal for all Nepalese people, makes no fabricated social proof claims, reports Android 5.0.5 as live, and reports iOS 5.0.5 as Waiting for Review.
- Icons and controls: passed. Product icons come from the app's Light-Outline set. Navigation, product tabs, download links, contact modal, and mobile menu have semantic labels and usable states.
- Accessibility: passed for the implemented scope. Each page has one main landmark and one H1; no image is missing `alt`; no button lacks a visible or accessible name; focus-visible styling and reduced-motion handling are present.

## Browser checks

- Chrome production export at 1440 × 900: no horizontal overflow (`scrollWidth 1440`), product tab selection works, no console errors.
- Chrome production export at 390 × 844: no horizontal overflow (`scrollWidth 390`), mobile menu opens and closes, no console errors.
- Contact dialog opens, closes, and exposes labelled fields. Submission was not sent during QA to avoid creating an external support request.
- Download page was reviewed separately and clearly distinguishes live Android availability from iOS review status.
- Firebase preview reviewed in Chrome: `https://unepalwebsite--premium-app-redesign-m1kcdjvw.web.app/`.
- Preview screenshot: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-preview-direct-chrome.png`.
- Preview product tabs, contact dialog, and `/download` route were re-tested; all passed with no console errors.

## Comparison history

1. Initial mobile comparison found a P2 above-the-fold hierarchy issue: the product interface was barely visible at 390 × 844. The hero copy, mobile CTA labels, spacing, and status line were tightened. The revised comparison shows the real app interface beginning prominently within the first viewport.
2. Initial section comparison found a P2 page-density issue: full-height Community and Bazaar screenshots made those sections excessively tall. The sections were changed to privacy-reviewed app-derived crops. The revised Community focused comparison shows balanced copy and readable real UI in one viewport.
3. Responsive metrics found a P2 10-pixel mobile horizontal overflow caused by decorative feature backing plates. The feature sections now clip those plates. Final metrics are `390 / 390` and `1440 / 1440` for viewport width / scroll width.
4. Post-fix Chrome capture, combined comparison, interaction checks, console check, lint, and production build all passed. No actionable P0, P1, or P2 findings remain.

## Findings

No actionable P0, P1, or P2 findings remain.

## Follow-up polish

No blocking polish gaps. Future live-content changes should repeat the privacy review before replacing any capture.

final result: passed
