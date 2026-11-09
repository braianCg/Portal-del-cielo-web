# Palette's Journal

## 2026-10-10 - Asynchronous Form Completion and Character Limits Affordance
**Learning:** Single-page forms with client-side simulated or async submissions often create dead ends when they replace input forms with static confirmation text, preventing users from submitting another item or correcting mistakes. In addition, textareas with hard `maxLength` attributes cause silent truncation without feedback unless an accessible, live character count (`aria-live="polite"`, `aria-describedby`) is displayed.
**Action:** When implementing single-page contact or prayer request forms, always provide a clear "reset / send another" secondary action within the success banner and display a subtle live counter linked to character-limited text inputs.
