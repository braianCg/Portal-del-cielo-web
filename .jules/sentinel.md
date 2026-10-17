## 2025-05-20 - Input Validation and Length Limits on Prayer Request Form
**Vulnerability:** Prayer request form accepted unconstrained user inputs and whitespace-only submissions without client-side string trimming, regex email validation, or character length caps.
**Learning:** React forms without explicit string trimming and `maxLength` controls can accept oversized payloads or invalid email structures, posing minor DoS and bad data insertion risks.
**Prevention:** Always enforce `maxLength` constraints on HTML input/textarea elements, trim whitespace prior to submission, and validate email formats using regular expressions.
