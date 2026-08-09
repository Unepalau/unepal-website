# uNepal premium graphic landing page — design QA

## Evidence

- Selected visual target: `design/references/premium-motion-poster-selected.png` (1487 × 1058 px).
- Final desktop implementation: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-graphic-desktop-1440x1024.png` (1425 × 1013 px capture from a 1440 × 1024 CSS viewport).
- Final mobile implementation: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-graphic-mobile-390x844.png` (375 × 812 px capture from a 390 × 844 CSS viewport).
- Full-view combined comparison: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-graphic-desktop-comparison.png`.
- Focused section evidence:
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-product-deck.png`
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-community-banner.png`
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-discovery-banner.png`
  - `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\unepal-premium-mobile-community.png`

## Normalization

- The selected target and desktop implementation have nearly identical aspect ratios. The 1487 × 1058 source was resized to the 1425 × 1013 implementation capture for the combined comparison; no device frame or browser chrome was included.
- Desktop state: 1440 × 1024 CSS viewport, public unauthenticated homepage, default hero and Home product tab.
- Mobile state: 390 × 844 CSS viewport, public unauthenticated homepage, closed navigation menu.
- The full desktop comparison is sufficient for the above-fold typography, artwork, labels, CTA, dock, and availability states because all are legible at full-view scale. Focused captures were used for the product deck and two supporting graphic sections.

## Required fidelity surfaces

- Visual direction: passed. The implementation follows the selected deep-navy stage, warm-ivory typography, restrained uNepal red, sweeping motion ribbon, four dimensional app objects, compact labels, and bottom dock.
- Screenshot restraint: passed. The landing page uses generated brand graphics and functional HTML widgets rather than full-screen app captures or a screenshot wall.
- Color system: passed. Navy, ivory, red, and a restrained supporting blue replace the earlier multi-color treatment.
- Typography and hierarchy: passed. The hero preserves the selected two-line headline structure and strong ivory/red contrast at desktop and mobile sizes.
- App identity: passed. Community, Bazaar, Hamro TV, Events, Home, and the download states are visible through real logo/icon assets, labels, and usable interface elements.
- Responsive layout: passed. No horizontal overflow was found at either viewport; the graphic composition enters the first mobile viewport and remains legible without crowding the CTA.
- Content integrity: passed. uNepal is positioned for all Nepalese people, Android 5.0.5 is presented as live, and iOS 5.0.5 is presented as Waiting for Review. No ratings, testimonials, user counts, or other fabricated proof appear.
- Accessibility: passed for the implemented scope. The homepage has one main landmark and one H1, no image is missing alternative text, no button lacks an accessible name, and keyboard-visible/reduced-motion styles remain present.

## Interaction and browser checks

- Home, Hamro TV, Bazaar, and Community product tabs work.
- Bazaar Local, Country, and Global scope selection works; Global was explicitly exercised.
- The mobile menu opens and closes.
- The contact modal opens and closes without sending an external request.
- `/download` loads with the H1 `Your Nepalese world, ready to go.` and retains the correct Android/iOS availability distinction.
- Console errors: none during homepage, interaction, responsive, and download-route checks.

## Comparison history

1. P2: the first implementation wrapped the desktop headline across three lines and placed it too high. Fixed with an explicit two-line structure, a wider grid, and corrected display sizing.
2. P2: the graphic objects lacked the clear product labels visible in the target. Fixed with compact icon-backed Community, Bazaar, Hamro TV, and Events labels.
3. P2: the Bazaar label clipped against the composition edge. Fixed by moving the label inward.
4. P2: the hero ended before the desktop viewport and the dock floated too high. Fixed with a viewport-height hero stage and a grounded dock.
5. P2: one product-section heading exposed internal design language. Replaced with product-facing copy: `One app. Every useful part connected.`
6. P2: the mobile graphic appeared too late below the fold. Fixed by tightening the mobile hero rhythm and raising the artwork.
7. Repeated combined comparisons and focused section reviews found no remaining actionable P0, P1, or P2 issues.

## Residual polish

- P3: the final hero artwork is slightly smaller and more spacious than the selected visual. This is intentional to preserve responsive clarity, CTA breathing room, and object legibility across widths.

final result: passed
