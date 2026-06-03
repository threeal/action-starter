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

### TypeScript Configuration

- **`tsconfig.json`** — Type-check config with `noEmit: true`; used by `pnpm tsc`. Extends `@tsconfig/node24`, which sets `module: nodenext` and `moduleResolution: node16`. This requires import paths to use `.js` extensions even when importing `.ts` source files.

### Build Configuration

- **`tsup.config.ts`** — Configures tsup to bundle `src/main.ts` as ESM with tree-shaking enabled.

### Build Output

- **`dist/main.js`** — Single bundled ESM file. Must be committed — CI verifies there is no git diff after building.

### Action Definition

- **`action.yml`** — Declares the action's inputs, outputs, branding, and the Node.js runtime pointing to `dist/main.js`.

## Tooling

- **pnpm** is the package manager. It uses `use-node-version` in `.npmrc` to select the Node.js version; `packageManager` in `package.json` pins the pnpm version; `engines.node` asserts Node >=24.
- **tsup** is the bundler. All packages — including runtime dependencies like `ghakit` — belong in `devDependencies`; tsup bundles everything so there are no runtime `dependencies` needed.
- **ghakit** handles all GitHub Actions-specific concerns: reading inputs, writing outputs, logging, and spawning processes.
- **ESLint** uses flat config (`eslint.config.ts`) with `@eslint/js` recommended rules and `typescript-eslint` strict + stylistic type-checked rules.
- **Prettier** uses `prettier-plugin-organize-imports` — import order is auto-managed.
- **Lefthook** manages Git hooks via `lefthook.yaml`. It is a standalone binary, not a pnpm package.
- **Vitest** uses `vitest.config.ts` with coverage always enabled, text reporter, and 100% thresholds across all metrics.
- **Dependabot** keeps GitHub Actions and npm dependencies up to date automatically via `.github/dependabot.yaml`.

## Testing

```sh
pnpm vitest run             # Run all tests
pnpm vitest run <file>      # Run a single test file
```

Coverage is always enabled and computed for all files imported during the test run. Running a single test file may fail the 100% threshold if it imports a source file that another test is responsible for fully covering — use the full suite for accurate results.

## Checking and Fixing

Use Lefthook to run the same steps as the pre-commit hook:

```sh
lefthook run pre-commit              # staged files only (default)
lefthook run pre-commit --all-files  # all files — matches what CI runs
```

This installs dependencies, fixes formatting, fixes lint, type-checks, and builds the action — in that order, stopping on the first failure. If any file changes during the run, it also fails and shows a diff of what changed — re-stage the changed files and retry.

Individual commands (manual fallback if needed): `pnpm prettier --write .`, `pnpm eslint --fix`, `pnpm tsc`, `pnpm tsup`.

## CI

CI has two jobs:

- **Check** — runs `lefthook run pre-commit --all-files` (install, format, lint, type-check, build), then runs the full test suite with `pnpm vitest run`.
- **Test** — checks out the action itself and runs it on `ubuntu-24.04`, `macos-15`, and `windows-2025` to verify the actual action behavior end-to-end.

See `.github/workflows/ci.yaml` for full details.
