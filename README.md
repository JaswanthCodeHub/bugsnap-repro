# BugSnap Repro

**Privacy-first visual bug reporting and Playwright reproduction platform.**

BugSnap Repro helps development teams turn browser bug reports into actionable, reproducible test drafts. It is designed as a self-hostable, open-source developer tool.

> **Project status:** Early development. APIs, package boundaries, and features may change. Do not use with production user data until the security and privacy controls are implemented and reviewed.

## Goals

- Capture visual evidence for browser bug reports.
- Collect configurable browser diagnostics with privacy protections.
- Organize reports by project and workspace.
- Turn recorded interaction metadata into editable Playwright test drafts.
- Connect reports to GitHub Issues.
- Support local development and self-hosting.

## Planned architecture

This repository is a TypeScript monorepo:

- `apps/dashboard` — React dashboard.
- `apps/api` — Fastify HTTP API.
- `packages/widget` — embeddable browser reporting SDK.
- `packages/shared` — shared types and schemas.
- `packages/playwright-generator` — reproduction test generation.
- `infra` — local infrastructure and deployment assets.
- `docs` — architecture and developer documentation.

## Planned technology

TypeScript, React, Vite, Fastify, PostgreSQL, Prisma, Playwright, Vitest, pnpm workspaces, Turborepo, and Docker Compose.

## Development status

The initial repository and architecture are being established. Features will be released incrementally:

1. Repository foundation and local development environment.
2. Projects, workspaces, and bug report ingestion.
3. Browser widget, screenshot capture, and annotations.
4. Privacy-aware browser diagnostics and event timeline.
5. Editable Playwright reproduction test drafts.
6. GitHub Issues integration.
7. Security hardening, documentation, and first stable release.

## Contributing

Bug reports, ideas, and pull requests are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing and follow the project's [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security vulnerabilities in public issues. See [SECURITY.md](SECURITY.md).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
