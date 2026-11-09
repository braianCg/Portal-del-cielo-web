# Sentinel's Journal

## 2026-10-30 - Content Security Policy (CSP) for Static React SPAs
**Vulnerability:** Static Single-Page Applications (SPAs) deployed without backend server control often lack HTTP response security headers (such as `Content-Security-Policy` and `X-Content-Type-Options`), leaving the client exposed to XSS vectors, clickjacking, and unauthorized third-party resource injection.
**Learning:** In purely static SPA deployments (e.g. GitHub Pages or static web hosts without custom edge header config), CSP can be declared directly via `<meta http-equiv="Content-Security-Policy">` in the root `index.html`. While certain directives like `frame-ancestors` only apply in HTTP response headers, meta CSP effectively enforces `default-src`, `script-src`, `style-src`, `font-src`, `img-src`, and `connect-src` against cross-site script execution and untrusted remote resources.
**Prevention:** Always define a strict CSP tailored to the external assets required by the application (such as Google Fonts and Unsplash images) while restricting script execution strictly to `'self'`.
