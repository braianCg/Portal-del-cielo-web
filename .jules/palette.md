# Palette's Journal

## 2026-10-18 - Live Character Feedback and Success State Reset in Long-form Inquiries
**Learning:** For emotional and lengthy user submissions (like prayer requests or contact notes with strict `maxLength`), users easily face silent input cutoff or submission failure without knowing how much space remains. Pairing `aria-describedby` + `aria-live="polite"` gives both visual and assistive clarity. Additionally, replacing the form with a success message without a "Send another" reset action traps the user in a dead-end state unless they force-reload the webpage.
**Action:** Always provide an accessible live character counter (`aria-describedby` + `aria-live="polite"`) alongside a clean reset action in single-page form success states.
