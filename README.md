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

## Repository structure

This repository is a TypeScript monorepo:

- `apps/dashboard` — React + Vite dashboard.
- `apps/api` — Fastify HTTP API.
- `packages/widget` — embeddable browser reporting SDK.
- `packages/shared` — shared types and contracts.
- `packages/playwright-generator` — reproduction test generation.
- `infra` — local infrastructure assets.

## Requirements

- Node.js (use an active LTS release).
- pnpm.
- Docker Desktop (only needed for the local PostgreSQL service).

## Local development

Clone the repository:

```bash
git clone https://github.com/JaswanthCodeHub/bugsnap-repro.git
cd bugsnap-repro
```

Install pnpm if it is not already available:

```bash
npm install --global pnpm
```

Install workspace dependencies:

```bash
pnpm install
```

Create your local environment file:

**PowerShell**
```powershell
Copy-Item .env.example .env
```

**macOS / Linux**
```bash
cp .env.example .env
```

Start PostgreSQL (optional for this initial milestone; the API health endpoint does not use the database yet):

```bash
docker compose --env-file .env -f infra/docker-compose.yml up -d
```

Start the dashboard and API:

```bash
pnpm dev
```

Local development URLs:

- Dashboard: http://127.0.0.1:5173
- API health: http://127.0.0.1:4000/health

Validate the workspace:

```bash
pnpm typecheck
pnpm build
```

The first `.env` values and PostgreSQL password are for local development only. Replace them before using any shared or deployed environment.

## Planned technology

TypeScript, React, Vite, Fastify, PostgreSQL, Prisma, Playwright, Vitest, pnpm workspaces, Turborepo, and Docker Compose.

## Development roadmap

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
