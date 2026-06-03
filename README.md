# Action Starter

A minimal template for building a [JavaScript GitHub Action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action) in [TypeScript](https://www.typescriptlang.org/) with [Node.js](https://nodejs.org/en). Ships pre-configured with formatting, linting, 100% test coverage enforcement, pre-commit hooks, and CI.

## Getting Started

Create a new repository from this template on GitHub using [this link](https://github.com/new?template_name=action-starter&template_owner=threeal), or clone it locally and point it at your own remote.

## Setup

Install [pnpm](https://pnpm.io/), then install dependencies:

```sh
pnpm install
```

Install [Lefthook](https://lefthook.dev/), then register the pre-commit hook:

```sh
lefthook install
```

## Customizing

**`action.yml`** — Update the action's name, description, branding, and inputs/outputs to match what your action does.

**`src/action.ts`** — Replace with your actual action logic as an exported async function. Use [`ghakit`](https://www.npmjs.com/package/ghakit) for anything GitHub Actions-related — reading inputs, writing outputs, logging, spawning processes, and more.

**`src/main.ts`** — Entry point that calls the action function and handles errors. Usually doesn't need to change.

**`README.md`** and **`CLAUDE.md`** — Replace with documentation suited to your project.

**`LICENSE`** — Replace with your preferred license, or keep it as-is (the template uses the [Unlicense](https://unlicense.org/) — public domain).

## Development

Write code in `src/`. Test files live alongside source as `*.test.ts`. Before committing, run the pre-commit hook to install dependencies, fix formatting and lint, type-check, and build the action:

```sh
lefthook run pre-commit
```

If any files change during the run, re-stage them and retry. The hook also runs automatically on each `git commit` — if it fails, fix the reported issues, re-stage, and commit again.

## Testing

Run the full test suite with:

```sh
pnpm vitest run
```

The project enforces 100% code coverage on every run.

## CI

`.github/workflows/ci.yaml` runs two jobs on every push and pull request:

- **check** — validates the pre-commit hook and runs tests
- **test** — runs the real action on Ubuntu, macOS, and Windows

Update the `test` job to exercise your action's actual inputs and verify its outputs.

## Releasing

Push a version tag and create a GitHub Release. To publish the action to GitHub Marketplace, check the option when creating the release — see [Publishing actions in GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace) for guidance.
