# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If you've created a project from this template, replace this content with guidance specific to your project.

## Commands

```sh
pnpm test                 # run all tests (Vitest)
pnpm test <file>          # run a single test file
pnpm tsc                  # type check
pnpm eslint .             # lint
pnpm prettier --check .   # check formatting
pnpm prettier --write .   # fix formatting
pnpm rollup -c            # build — outputs dist/main.bundle.mjs
```

Pre-commit hooks are managed by [Lefthook](https://lefthook.dev/), set up with `lefthook install`. Hooks automatically run formatting, linting, type checking, and building before each commit. CI also validates the pre-commit hook by running `lefthook run pre-commit --all-files`.

## Architecture

This is a Node.js 24 GitHub Action. The action's entry point is `dist/main.bundle.mjs`, produced by Rollup bundling `src/main.ts` into a single ESM file. The `dist/` folder must be committed — CI verifies there is no git diff after building.

Source lives entirely in `src/`. The main logic uses `gha-utils` for reading action inputs (`getInput`) and writing outputs/logs. Tests use Vitest and must maintain 100% coverage (enforced in `vitest.config.ts`).

The action is defined in `action.yml`, which declares inputs, outputs, and the Node.js runtime pointing to `dist/main.bundle.mjs`.
