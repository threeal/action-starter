<!-- TODO: Replace the content of this file with the new project description. -->

# Action Starter

A minimalistic [GitHub repository template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to kickstart your [GitHub Action](https://github.com/features/actions) project.

## Key Features

- Includes a sample metadata file for a GitHub action.
- Develops logic for the GitHub action in [Node.js](https://nodejs.org/en) using the following stacks:
  - [Yarn](https://yarnpkg.com/) for project management.
  - [TypeScript](https://www.typescriptlang.org/) for type checking.
  - [Jest](https://jestjs.io/) for unit testing.
  - [ESLint](https://eslint.org/) for static analysis.
  - [Prettier](https://prettier.io/) for code formatting.
- Provides a sample workflow file for testing the action.
- Supports dependency updates with [Dependabot](https://docs.github.com/en/code-security/dependabot).

## Usage

> For detailed instructions on how to use this template, please refer to [the wiki](https://github.com/threeal/action-starter/wiki).

- Create a new repository from this template.
- Make the following changes to the new repository:
  - Replace the [LICENSE](LICENSE) file.
  - Update the content of the [README](README.md) file.
  - Define the action information in the [action.yml](action.yml) file.
  - Develop the action logic in the [src/main.ts](src/main.ts) file. Use these commands for development:
    - `yarn install`: Initialize project dependencies.
    - `yarn format`: Format the source code.
    - `yarn lint`: Lint the source code.
    - `yarn test`: Run unit tests. Write the unit tests in files with `*.test.ts` pattern.
    - `yarn build`: Build the source code into a single file for distribution.
  - Write tests for the action in the [test workflow](.github/workflows/test.yaml) file.
- Finalize the action and cut the first release.
