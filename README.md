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

Replace or extend the template files to fit your project:

- **`.github/workflows/ci.yaml`** — Update or replace the `test` job with jobs that test your action as needed.
- **`src/download.ts`** — Replace the placeholder file-download function with your own.
- **`src/main.ts`** — Replace with your own action logic.
- **`action.yml`** — Update the action's name, description, branding, and inputs/outputs to match what your action does.
- **`CLAUDE.md`** — Replace with guidance specific to your project.
- **`LICENSE`** — Replace with your preferred license, or keep the [Unlicense](https://unlicense.org/).
- **`README.md`** — Replace with a description of your project.

## Development

Write code in `src/`, using [`ghakit`](https://www.npmjs.com/package/ghakit) for GitHub Actions utilities such as inputs, outputs, and logging. Test files live alongside source as `*.test.ts`. Run the test suite with:

```sh
pnpm vitest run
```

The project enforces 100% code coverage on every run.

Each `git commit` runs the pre-commit hook registered during setup, which checks your changes and fixes what it can in place. If it fails, fix any reported issues, re-stage the changed files, and commit again.

After committing, push to `main` or open a pull request from another branch — CI will run the same checks across all files, plus additional checks of its own.

## Releasing

Push a version tag and create a GitHub Release. To publish the action to GitHub Marketplace, check the option when creating the release — see [Publishing actions in GitHub Marketplace](https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace) for guidance.
