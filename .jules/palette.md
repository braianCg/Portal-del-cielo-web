# Palette's Journal

## 2026-11-11 - Accessible Character Counters with Live Region Feedback
**Learning:** Adding a hard `maxLength` without visual indicator or accessibility attributes leaves users guessing how much text they can enter and why input abruptly stops. Using `aria-describedby` linking the counter element with `aria-live="polite"` announces length boundaries contextually without disrupting typing flow.
**Action:** Always pair length-restricted textareas with an inline character counter and `aria-describedby` + `aria-live="polite"` for accessible real-time feedback.
