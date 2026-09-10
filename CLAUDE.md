# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If working in a project derived from this template, inform the user that this CLAUDE.md still contains template guidance and should be updated with project-specific content.

## About This Repository

Minimal GitHub Action starter, TypeScript targeting Node 24, ESM. `src/` contains a placeholder mkdir action — replace it with real action logic when starting a new project.

## Rules that aren't obvious from the code

- Import paths must end in `.js`, even when importing `.ts` source files. `tsconfig.json` sets `moduleResolution: node16`, which requires this.
- `dist/main.js` (built by `tsup` from `src/main.ts`) must be committed — `action.yml` points to it directly as the runtime entry, and CI fails if building produces a diff.
- `lefthook run pre-commit` auto-fixes formatting/lint and rebuilds `dist/main.js`; `fail_on_changes` fails the run if any file changed. If that happens, re-stage the changed files and rerun.
- Vitest's 100% coverage threshold applies to the whole run, not per file. Running a single test file can fail coverage if it imports source another file is responsible for covering — use the full suite for an accurate result.
- `tsup` bundles everything at build time, so every package — including runtime dependencies — belongs in `devDependencies`; there's no `dependencies` field to keep in sync.
- Prettier auto-reorders imports (`prettier-plugin-organize-imports`) — reordering on format is expected, not a bug.

## Layout

- `src/action.ts` — the action implementation, an exported async function.
- `src/main.ts` — entry point; calls the action function and handles error logging and exit codes.
- `src/*.test.ts` — colocated with the source they test.

## Config map

- Type checking — `tsconfig.json`
- Lint — `eslint.config.ts`
- Format — `.prettierrc.json`
- Bundler — `tsup.config.ts`
- Tests + coverage — `vitest.config.ts`
- Git hooks — `lefthook.yaml`
- CI — `.github/workflows/ci.yaml`
- Dependency updates — `.github/dependabot.yaml`
- Action inputs/outputs/branding — `action.yml`

## Commands

- `lefthook run pre-commit` — lint/format/build on staged files (`--all-files` to match CI)
- `pnpm vitest run` — full test suite with coverage
