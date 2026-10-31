# Sentinel's Security Journal

## 2026-10-30 - Defense-in-depth with CSP and HTTP Security Headers in SPA
**Vulnerability:** Single-page React applications serving static HTML without explicit Content Security Policy (CSP) and HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) are susceptible to clickjacking, unauthorized script execution, MIME sniffing, and cross-origin leakage.
**Learning:** For client-side rendered SPAs using Vite, CSP meta tags in `index.html` secure the static client-side rendering while `server.headers` and `preview.headers` in `vite.config.js` ensure Vite development and preview environments enforce proper security response headers.
**Prevention:** Always pair strict CSP directives in `index.html` with complementary HTTP headers in Vite server/preview configurations.
