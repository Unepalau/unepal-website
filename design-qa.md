# Design QA — uNepal landing-page rebuild v2

## Visual truth and implementation evidence

- Source visual truth: `C:\Users\manoj\.codex\generated_images\019fd406-e0bb-7093-9808-27d822a90518\exec-0225128f-1c96-48e2-b9e5-33389de8625e.png`
- Source dimensions: 864 × 1821 px (single generated desktop artboard, treated as 1× reference density).
- Primary implementation capture: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\landing-rebuild-v2-qa\desktop-1440x900-viewport.png`
- Implementation dimensions: 1440 × 900 px at a 1440 × 900 CSS viewport and 1× capture density.
- Full-view comparison: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\landing-rebuild-v2-qa\comparison-full.png`
- Focused hero comparison: `C:\Users\manoj\.codex\visualizations\2026\08\05\019fd406-e0bb-7093-9808-27d822a90518\landing-rebuild-v2-qa\comparison-hero.png`
- Density normalization: the focused comparison scales the 864 px source width to 1440 px and crops both compositions to the first 900 px; the full-view comparison normalizes both complete pages to 900 px height.
- State: default landing page, desktop navigation closed, “All in one” selected.

## Comparison findings

- The implementation preserves the selected reference’s asymmetric, product-first hero; heavy editorial typography; red accent; restrained white/soft-red/soft-blue section rhythm; unboxed product rail; and horizontally composed Community, Bazaar, Discover, and download sections.
- The implementation intentionally replaces the generated mock’s synthetic UI details with approved real uNepal Android screens. This changes small image content while improving product truth and meeting the privacy constraint.
- The implementation is slightly airier and longer than the reference so real screen captures remain legible and the layout can recompose cleanly on tablets and phones.
- No visible P0, P1, or P2 mismatch remains. Spacing, type hierarchy, card boundaries, radii, image crops, and responsive stacking are coherent across the requested sizes.
- P3 accepted differences: real app copy and imagery differ from ImageGen details; the footer includes required legal links; mobile uses a custom stacked/scroller composition rather than a shrunken desktop layout.

## Responsive and interaction evidence

- 1440 × 900: `desktop-1440x900-viewport.png`
- 1024 × 768: `tablet-1024x768.png`
- 768 × 1024: `tablet-768x1024.png`
- 390 × 844: `mobile-390x844.png`
- 375 × 812: `mobile-375x812.png`
- Mobile focused states: `mobile-390-community.png`, `mobile-390-bazaar.png`, `mobile-390-discover.png`, `mobile-390-download.png`
- Product rail selection, section navigation, mobile menu, official store links, and download CTAs were exercised in Chrome.
- Automated browser inspection at 390 × 844 found no horizontal overflow, one H1, zero missing image alt attributes, zero empty buttons, and zero empty links.

## Comparison history

1. Initial combined comparison: no P0/P1 structural mismatch. Found a P2 browser-console performance warning when direct navigation made the Community or Bazaar image the current LCP candidate.
2. Iteration 2: marked the two section-leading images for eager loading, rebuilt, and opened a clean Chrome session. Console result: informational development messages only; no warnings or errors. No visual regression in the combined comparison.

## Final result

passed
