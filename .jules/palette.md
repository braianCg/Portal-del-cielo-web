# Palette's Journal

## 2026-03-31 - Provide Visual and Screen-Reader Feedback for Hard Character Limits
**Learning:** When text inputs or textareas enforce strict `maxLength` constraints (especially for open-ended fields like prayer requests or messages), users can become confused or frustrated when typing silently halts without visual feedback or progress indication.
**Action:** Always accompany textareas that have substantial `maxLength` limits with a live character count linked via `aria-describedby` and `aria-live="polite"` so both sighted users and assistive technology users understand how much capacity remains.
