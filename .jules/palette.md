## 2025-10-29 - Form Success Focus Management & Live Region
**Learning:** In React single-page apps, when replacing a form with a inline success message component upon submission, screen readers often fail to announce the change unless `role="status"` / `aria-live="polite"` is set and focus is programmatically shifted to the message container with `tabIndex={-1}`.
**Action:** Always wrap async form success confirmations in a container with `tabIndex={-1}`, `role="status"`, and `aria-live="polite"`, and use a `useRef` + `useEffect` hook to move focus upon submission state update.
