# Sentinel's Journal

## 2026-11-11 - Static Site Security Policies via Meta Tags
**Vulnerability:** Static single-page applications deployed without a custom server backend lack HTTP response headers, leaving clients susceptible to unauthorized script injection, untrusted cross-origin resource access, and referrer leakage.
**Learning:** For client-side-only deployments without custom reverse proxies or server edge functions, HTML `<meta http-equiv="Content-Security-Policy">` and `<meta name="referrer">` provide client-enforced defenses. Note that `frame-ancestors` and `X-Content-Type-Options` cannot be delivered via `<meta>` elements per W3C specification and require actual HTTP response headers.
**Prevention:** Ensure static sites declare baseline CSP and referrer policies directly in the root `index.html` to guarantee defense-in-depth across arbitrary hosting environments.
