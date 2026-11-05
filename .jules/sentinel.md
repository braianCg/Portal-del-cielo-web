# Sentinel's Journal

## 2026-11-05 - Enforce Client-Side CSP and Security Headers on Static SPA
**Vulnerability:** Static single page application (SPA) lacked Content Security Policy (CSP), MIME-sniffing protection, and referrer control meta tags, leaving it susceptible to content injection and referrer leakage.
**Learning:** For static sites hosted without custom backend servers, HTTP response headers cannot always be configured directly at the server level. Implementing restrictive CSP, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin` via `<meta>` tags ensures immediate baseline defense-in-depth across hosting environments.
**Prevention:** Include standard security `<meta>` directives in `index.html` allowing only explicitly trusted origins (`fonts.googleapis.com`, `fonts.gstatic.com`, `images.unsplash.com`).
