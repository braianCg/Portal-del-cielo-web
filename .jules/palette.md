# Palette's Journal

## 2026-04-18 - Keyboard Navigation & Skip-to-Content in Single-Page Landing Pages
**Learning:** In rich single-page applications with fixed navbars containing multiple links, theme toggles, and CTA buttons, keyboard and screen-reader users are forced to tab through repeated navigation items on every page visit before reaching the core page content. Furthermore, standard outline removal (`outline: none`) without `:focus-visible` leaves keyboard tab users without visual cues.
**Action:** Always provide an accessible `.skip-link` positioned off-screen that reveals on `:focus`, target a `<main id="main-content" tabIndex="-1">`, and style `:focus-visible` with the design system's accent/gold color and offset.
