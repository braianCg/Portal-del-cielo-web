# Palette's Journal

## 2026-10-24 - Accessible Skip-to-Content Link and Global Focus Indicators
**Learning:** Fixed/sticky navigation headers and icon buttons in single-page applications force keyboard and screen-reader users to tab through entire menu hierarchies before accessing primary page landmarks. Interactive elements also lacked `:focus-visible` indicators.
**Action:** Always provide an early visually-hidden skip link (`.skip-link:focus { top: 16px; }`) pointing to `<main id="main-content" tabIndex="-1">`, paired with accessible `:focus-visible` rings on interactive elements.
