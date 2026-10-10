# Bolt's Journal

## 2026-10-10 - Throttle Scroll Events and Pre-cache DOM Selectors in Observers
**Learning:** In standard DOM applications, attaching unthrottled scroll event listeners and executing `querySelectorAll`/`querySelector` inside `IntersectionObserver` or scroll callbacks creates unnecessary main-thread overhead and layout thrashing during scroll.
**Action:** Use `requestAnimationFrame` + `passive: true` listeners for scroll events, and pre-map/cache DOM element lookups outside observer callbacks.
