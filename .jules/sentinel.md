# Sentinel's Journal

## 2026-10-30 - Defense-in-Depth Security Headers for Vite SPA
**Vulnerability:** Static SPAs deployed without custom server configurations lack defense-in-depth headers against Cross-Site Scripting (XSS), data exfiltration, clickjacking/embedding, and MIME sniffing attacks.
**Learning:** For client-side Single Page Applications served statically without a dedicated backend middleware, critical browser security policies can be enforced at document parsing time via `<meta http-equiv="Content-Security-Policy">`, `<meta name="referrer">`, and `<meta http-equiv="X-Content-Type-Options">` within `index.html`. Restricting sources to trusted domains (`self`, Google Fonts, Unsplash) and explicitly denying object/plugin execution (`object-src 'none'`) drastically minimizes injection surfaces.
**Prevention:** Always declare a baseline Content Security Policy and referrer policy in SPA root HTML templates when reverse proxy or edge header configuration is not bundled in repository configuration.
