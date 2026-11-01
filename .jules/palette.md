# Palette's Journal

## 2026-10-24 - Accessible Skip-to-Content Link
**Learning:** Fixed/sticky navigation headers with multiple interactive navigation links can hinder keyboard and screen reader accessibility if users must tab through all items before reaching main page content. Setting `id="main-content"` with `tabIndex={-1}` on `<main>` ensures focus cleanly transfers to the content container without requiring a default focus ring until navigated into.
**Action:** Always provide a high-contrast, smoothly transitioned `.skip-link` at the root of the app that becomes visible on `:focus`.
