# Sentinel's Journal

## 2026-10-24 - Content Security Policy (CSP) & Header Hardening for Static SPA
**Vulnerability:** Static single-page application without Content Security Policy or baseline security headers, leaving it susceptible to cross-site scripting (XSS), clickjacking, and referrer leakage.
**Learning:** For static Vite-based SPAs hosted without an application server backend, embedding a strict Content Security Policy and Referrer-Policy via `<meta>` tags in `index.html` provides defense-in-depth in production across any static CDN host, while configuring headers in `vite.config.js` enforces the headers during local development and preview serving.
**Prevention:** Ensure external resources (Google Fonts, Unsplash CDN) are explicitly whitelisted in CSP directives (`style-src`, `font-src`, `img-src`) and restrict `object-src 'none'` and `base-uri 'self'`.
