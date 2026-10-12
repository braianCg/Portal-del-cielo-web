# Palette's Journal

## 2026-10-10 - Dynamic Form Replacement A11y & Reset Pattern
**Learning:** Replacing an interactive `<form>` element inline with a static success message causes screen readers to silently lose context unless `role="status"` and `aria-live="polite"` are declared on the success container. Additionally, replacing the form entirely without a reset mechanism traps users in the success state.
**Action:** Always wrap form completion confirmation containers with `role="status"` and `aria-live="polite"`, and provide a clear reset action that restores focus to the primary input element.
