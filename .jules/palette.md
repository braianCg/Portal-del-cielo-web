# Palette's Journal

## 2026-10-16 - Live Accessible Character Limits on Long Form Fields
**Learning:** For multi-line text input fields in forms (e.g., prayer requests, contact messages), providing live character feedback with `aria-live="polite"` and `aria-atomic="true"` prevents truncation surprises and improves accessibility for screen reader users without introducing layout shift.
**Action:** Always include polite live updates alongside `maxLength` limits on user-submitted textareas.
