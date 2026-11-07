# Palette's Journal

## 2026-11-07 - Provide Visual and Screen-Reader Feedback During Async Form Submissions
**Learning:** In single-page landing forms with asynchronous submission delays (e.g. `setTimeout` simulating API dispatch), disabling buttons without an animated indicator or `aria-busy` attribute causes confusion for users unsure if their click registered, while active hover transitions can misleadingly suggest the button is still interactive.
**Action:** When handling async submission in forms, pair `disabled` with `aria-busy={submitting}`, an inline SVG spinner (`aria-hidden="true"`), and explicit `:disabled` CSS (`cursor: not-allowed; opacity: 0.7; transform: none; box-shadow: none;`) to suppress interactive hover effects and provide immediate tactile feedback.
