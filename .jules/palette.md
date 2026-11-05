# Palette's Journal

## 2026-10-30 - Global Keyboard Focus Indicators & Skip Link in Custom Themed Single-Page Sites
**Learning:** Custom themes with bespoke dark and light modes frequently lack native `:focus-visible` styling when default outlines are bypassed or unnoticed against background gradients, preventing keyboard users from tracking their position. Adding centralized `:focus-visible` outline rings with theme-aware tokens (`--gold2` and `--gold-glow`) and an accessible skip-to-content link ensures compliance and effortless keyboard navigation without interfering with pointer interactions.
**Action:** Always provide global `a:focus-visible, button:focus-visible` styles with sufficient contrast and a `.skip-link` pointing directly to `<main id="main-content">`.
