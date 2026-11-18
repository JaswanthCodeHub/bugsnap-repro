# Contributing to BugSnap Repro

Thanks for your interest in contributing.

## Before you start

- Check existing issues and pull requests for related work.
- For large changes, open an issue first to discuss the design.
- Keep changes focused and include tests where practical.
- Never commit credentials, tokens, private screenshots, or real user data.

## Development workflow

1. Fork the repository and create a feature branch.
2. Install dependencies using the package manager and lockfile selected by the maintainers.
3. Make a focused change.
4. Run relevant linting, type checks, tests, and builds.
5. Update documentation when behavior or setup changes.
6. Open a pull request with a clear summary and testing notes.

## Pull request checklist

- [ ] The change has a clear purpose.
- [ ] Tests were added or updated where appropriate.
- [ ] Type checks and builds pass.
- [ ] Documentation was updated.
- [ ] No secrets or private data are included.
- [ ] Third-party license requirements are respected.

## Code style

Use TypeScript for application and package code. Prefer explicit types, small modules, validated inputs, and clear error handling. Follow formatting and lint rules configured in the repository.

## Security and privacy

Do not weaken redaction, authorization, upload validation, or workspace isolation to make a test pass. Report suspected vulnerabilities privately according to [SECURITY.md](SECURITY.md).
