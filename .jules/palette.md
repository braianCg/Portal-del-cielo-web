## 2025-05-18 - Form feedback and screen reader announcements
**Learning:** In React single-page applications with inline form submission replacement, replacing the `<form>` element with a success `<div>` without `role="status"` or `aria-live="polite"` prevents screen readers from announcing that the form was submitted successfully.
**Action:** Always add `role="status"` and `aria-live="polite"` to dynamically revealed form completion containers, and provide a reset button to allow resubmission without page reloads.
