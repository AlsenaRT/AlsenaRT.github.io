# Security Policy

## Scope

This policy covers:

- `https://alsenart.github.io/`
- `AlsenaRT/AlsenaRT.github.io`
- the code and deployment workflow contained in this repository.

This is a static personal portfolio. It does not intentionally process authentication credentials, payment information, or user-submitted application data.

Third-party websites, staging environments, institutional systems, and other external services linked from the portfolio are **not** in scope. Do not test those systems without explicit permission from their respective owners.

## Reporting a vulnerability

Please report security issues privately by email:

**alifrafitulusena@gmail.com**

Useful reports should include:

- the affected URL or file,
- a clear description of the issue,
- steps to reproduce it,
- expected and actual behavior,
- potential security impact,
- screenshots or proof-of-concept details when appropriate.

Please avoid including sensitive personal data in reports unless it is necessary to explain the issue.

## Responsible testing

Please do not:

- perform denial-of-service or high-volume automated testing,
- attempt social engineering,
- access or modify data that is not yours,
- test third-party systems linked from this portfolio,
- publish a vulnerability before there has been a reasonable opportunity to review it.

## Security design notes

The site is statically generated and intentionally avoids:

- an application backend,
- authentication and session state,
- a database,
- a server-side contact form,
- cookies and analytics,
- third-party runtime JavaScript.

Sensitive values shown in screenshots from internal projects are reviewed and redacted before publication.

## Supported version

Security fixes are applied to the current `main` branch and the currently deployed GitHub Pages build.
