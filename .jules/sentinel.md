# Sentinel's Journal

## 2026-11-06 - Enforce Client-Side CSP and Security Headers on Static SPA
**Vulnerability:** Static single page application (SPA) lacked Content Security Policy (CSP), MIME-sniffing protection, and referrer control meta tags, leaving it susceptible to content injection and referrer leakage. In addition, unvalidated `localStorage` inputs could result in state corruption.
**Learning:** For static sites hosted without custom backend servers, HTTP response headers cannot always be configured directly at the server level. Implementing restrictive CSP, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin` via `<meta>` tags ensures immediate baseline defense-in-depth across hosting environments, while configuring Vite `server.headers` and `preview.headers` secures development and preview runs.
**Prevention:** Include standard security `<meta>` directives in `index.html` allowing only explicitly trusted origins (`fonts.googleapis.com`, `fonts.gstatic.com`, `images.unsplash.com`) and strictly validate all client-persisted storage values before use.
