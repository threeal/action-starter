# Action Starter

A minimal template for building a [JavaScript GitHub Action](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action).

## Getting Started

Create a new repository from this template on GitHub using [this link](https://github.com/new?template_name=action-starter&template_owner=threeal).

Or clone it locally and point it at your own remote.

## Setup

Install [pnpm](https://pnpm.io/), then install dependencies:

```sh
pnpm install
```

Install [Lefthook](https://lefthook.dev/), then register the pre-commit hooks:

```sh
lefthook install
```

## Customizing the Action

### `action.yml`

Update the action's name, description, branding, and inputs/outputs to match what your action does.

### `src/main.ts`

This is the action's entry point. Replace the example logic with your own. Use [`gha-utils`](https://github.com/threeal/gha-utils) to read inputs, write outputs, and log errors:

```ts
import { getInput, logError, setOutput } from "gha-utils";

try {
  const input = getInput("my-input");
  // ... your action logic ...
  setOutput("my-output", result);
} catch (err) {
  logError(err);
  process.exitCode = 1;
}
```

### `LICENSE`

The template ships with the [Unlicense](https://unlicense.org/) (public domain). Replace it with the license you want, or leave it as-is.

## Development Workflow

Write your code in `src/`. When you're ready, just commit — the pre-commit hook will automatically:

1. Install dependencies
2. Format code (Prettier)
3. Fix lint issues (ESLint)
4. Type-check (TypeScript)
5. Build the bundle (`dist/main.bundle.mjs`)

If the hook reports errors, fix them and commit again. The `dist/` folder must be committed — it's what GitHub Actions runs.

## Testing

Add test files alongside source files as `*.test.ts`. Run all tests with:

```sh
pnpm test
```

100% code coverage is enforced. Tests use [Vitest](https://vitest.dev/).

## CI

`.github/workflows/ci.yaml` runs two jobs on every push and pull request:

- **check** — validates the pre-commit hook and runs tests
- **test** — runs the real action on Ubuntu, macOS, and Windows

Update the `test` job to exercise your action's actual inputs and verify its outputs.

## Releasing

Tag a release on GitHub:

```sh
git tag v1.0.0
git push origin v1.0.0
```

Then create a GitHub Release from that tag. To make the action discoverable, [publish it to the GitHub Marketplace](https://docs.github.com/en/actions/sharing-automations/creating-actions/publishing-actions-in-github-marketplace) from the release page.
