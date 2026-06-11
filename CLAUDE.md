# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If working in a project derived from this template, inform the user that this CLAUDE.md still contains template guidance and should be updated with project-specific content.

## About This Repository

This is a minimal Node.js GitHub Action starter template written in TypeScript targeting Node 24 (ESM). The mkdir action in `src/` is a placeholder — replace it with your actual action logic when starting a new project.

## Architecture

### Source Files

- **`src/action.ts`** — The action implementation as an exported async function.
- **`src/main.ts`** — Entry point that calls the action function and handles error logging and exit codes.
- **`src/*.test.ts`** — Vitest test files co-located with source.

### Build Outputs

- **`dist/main.js`** — Single bundled ESM file. Must be committed — CI verifies there is no git diff after building.

### Action Definition

- **`action.yml`** — Declares the action's inputs, outputs, branding, and the Node.js runtime pointing to `dist/main.js`.

## Tooling

### Dependabot

Keeps GitHub Actions and npm dependencies up to date automatically via `.github/dependabot.yaml`.

### ESLint

Linter configured in `eslint.config.ts`.

### GitHub Actions

Automates CI. Workflow files:

- **`.github/workflows/ci.yaml`** — Triggers on push to `main`, pull requests, and manual dispatch.

### Lefthook

Git hook manager configured in `lefthook.yaml`.

### pnpm

Package manager. Also manages the Node.js runtime — versions for Node.js and pnpm are pinned in `package.json`.

### Prettier

Formatter configured in `.prettierrc.json` using `prettier-plugin-organize-imports` — import order is auto-managed.

### tsup

Bundler configured in `tsup.config.ts`. All packages — including runtime dependencies — belong in `devDependencies`; tsup bundles everything so there are no runtime `dependencies` needed.

### TypeScript

Type checker. `tsconfig.json` is used for type checking via `pnpm tsc`.

The config sets `moduleResolution: node16`, which requires all import paths to use `.js` extensions — even when importing `.ts` source files.

### Vitest

Test runner configured in `vitest.config.ts` with 100% coverage threshold required on every test run.

## Checking and Fixing

Run the pre-commit hook:

```sh
lefthook run pre-commit              # staged files only (default)
lefthook run pre-commit --all-files  # all files — matches what CI runs
```

If any file changes during the run, re-stage the changed files and retry.

## Testing

```sh
pnpm vitest run             # Run all tests
pnpm vitest run <file>      # Run a single test file
```

Coverage is always enabled and computed for all files imported during the test run. Running a single test file may fail the 100% threshold if it imports a source file that another test is responsible for fully covering — use the full suite for accurate results.
