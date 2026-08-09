# Alif Rafi Tulusena — Portfolio

[![Deploy to GitHub Pages](https://github.com/AlsenaRT/AlsenaRT.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlsenaRT/AlsenaRT.github.io/actions/workflows/deploy.yml)
[![Security checks](https://github.com/AlsenaRT/AlsenaRT.github.io/actions/workflows/security.yml/badge.svg)](https://github.com/AlsenaRT/AlsenaRT.github.io/actions/workflows/security.yml)

Personal portfolio for **Alif Rafi Tulusena**, a UI/UX designer and Computer Science graduate.

Live site: https://alsenart.github.io/

## Architecture

```text
Astro source
    ↓
npm lockfile / reproducible install
    ↓
GitHub Actions build
    ↓
static HTML / CSS / minimal JavaScript
    ↓
GitHub Pages over HTTPS
```

The portfolio is intentionally static. It has:

- no application server,
- no database,
- no authentication or sessions,
- no server-side contact form,
- no cookies or analytics,
- no third-party runtime JavaScript.

The contact link uses `mailto:` so messages are handled by the visitor's configured email client rather than collected or stored by this website.

## Security posture

This repository treats the portfolio as a small public software system rather than only a visual artifact.

Implemented controls include:

- least-privilege GitHub Actions permissions,
- GitHub Actions pinned to full commit SHAs,
- `npm ci` for lockfile-based builds,
- scheduled dependency auditing,
- Dependabot configuration for npm and GitHub Actions,
- a document-delivered Content Security Policy,
- an explicit referrer policy,
- same-origin runtime resources,
- no user-submitted application data,
- redaction of sensitive values in production-system screenshots,
- a public vulnerability disclosure policy,
- RFC 9116 `security.txt`.

The CSP intentionally permits inline **styles** because several visual compositions currently use inline style declarations. Inline **scripts** are not permitted.

## Threat model

Primary assets:

- integrity of the deployed portfolio,
- integrity of the GitHub Actions deployment pipeline,
- source-code and dependency integrity,
- privacy of information shown in project material,
- the visitor's browser context.

Primary risks considered:

| Risk | Mitigation |
| --- | --- |
| Dependency compromise | lockfile, Dependabot, scheduled `npm audit` |
| CI/CD action compromise | immutable full-SHA action pins, scoped job permissions |
| Accidental secret exposure | ignored secret files, GitHub secret scanning / push protection |
| Script injection impact | same-origin script CSP, no third-party runtime scripts |
| Unintended data collection | static architecture, no forms, cookies, analytics, or backend |
| Accidental publication of private data | manual review and redaction of project screenshots |
| Unauthorized deployment | GitHub Pages environment + OIDC deployment identity |

## Local development

Requirements:

- Node.js 22+
- npm

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Security checks:

```bash
npm run security:audit
npm run security:check
```

## Deployment

The site deploys from `main` using GitHub Actions.

The workflow:

1. checks out source without persisting credentials,
2. installs Node dependencies with `npm ci`,
3. builds Astro,
4. uploads only `dist/`,
5. deploys through the protected `github-pages` environment.

## Vulnerability reporting

Please read [SECURITY.md](./SECURITY.md) before reporting an issue.

The security policy applies only to this portfolio and repository. Third-party systems linked from project pages are outside scope and must not be tested without their owners' explicit authorization.

## Technology

- Astro
- Tailwind CSS
- TypeScript / JavaScript
- GitHub Actions
- GitHub Pages
