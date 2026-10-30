## 2025-05-18 - Character Counters and Screen Reader Feedback on Prayer Request Forms
**Learning:** Textareas with character limits benefit significantly from `aria-describedby` linkage to live counters so screen reader users receive context on limits without interrupting typing flow. Success confirmation banners must use `role="status"` and `aria-live="polite"` to be announced seamlessly when state transitions from form to result message.
**Action:** Always link form character counters via `aria-describedby` and add `aria-live="polite"` / `role="status"` to conditional success containers.
