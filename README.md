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

This guide explains how to use this template to start a new GitHub Action project, from creation to release.

### Create a New Project

Follow [this link](https://github.com/new?template_name=action-starter&template_owner=threeal) to create a new project based on this template. For more information about creating a repository from a template on GitHub, refer to [this documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Alternatively, you can clone this repository locally to begin using this template.

### Choose a License

By default, this template is [unlicensed](https://unlicense.org/). Before modifying this template, replace the [`LICENSE`](./LICENSE) file with the license to be used by the new project. For more information about licensing a repository, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

Alternatively, you can remove the `LICENSE` file or leave it as-is to keep the new project unlicensed.

### Update Project Information

To replace the sample information in this template with details about your new project, complete the following steps:

- Replace the content of this [`README.md`](./README.md) file with a description of the new project. For more information on adding READMEs to a project, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).
- Modify the action metadata in the [`action.yml`](./action.yml) file according to the new project specifications. For more details on the action metadata, refer to [this documentation](https://docs.github.com/en/actions/sharing-automations/creating-actions/metadata-syntax-for-github-actions).

> Note: You can also search for `TODO` comments for a list of information that needs to be replaced.

### Set Up Tools

It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage the Node.js version in the project. By default, this template uses the Node.js version specified in the [`.nvmrc`](./.nvmrc) file. Use the following command to install and use the correct Node.js version with nvm:

```sh
nvm install
```

This template uses [Yarn](https://yarnpkg.com/) with [Plug'n'Play](https://yarnpkg.com/features/pnp) support as the package manager. If Yarn is not yet enabled, run the following command:

```sh
corepack enable yarn
```

Then, install the project dependencies with:

```sh
yarn install
```

For more information on Yarn, such as adding dependencies or running tools, refer to [this documentation](https://yarnpkg.com/getting-started).

### Developing the Action

Write the logic for the action in the [`src/main.ts`](./src/main.ts) file according to the project requirements. If you're new to [TypeScript](https://www.typescriptlang.org/), refer to [this documentation](https://www.typescriptlang.org/docs/) for guidance.

If the action will support pre- and post-steps, additional files like `src/pre.ts` and `src/post.ts` can be added. Just make sure to update the Rollup configuration in the [`rollup.config.js`](./rollup.config.js) file and the action metadata in the [`action.yml`](./action.yml) file.

Once the code is written, format it with:

```sh
yarn format
```

Then, check linting with:

```sh
yarn lint
```

Lastly, build and bundle the action files with:

```sh
yarn build
```

### Testing the Action

Test files in this template are named `*.test.ts` and typically correspond to the source files being tested. This template uses [Jest](https://jestjs.io/) as the testing framework. For more information on testing with Jest, refer to [this documentation](https://jestjs.io/docs/getting-started).

After creating your test files, run tests with:

```sh
yarn test
```

Additionally, you can test the action by running it directly from the GitHub workflow as specified in the [`.github/workflows/test.yaml`](./.github/workflows/test.yaml) file.

### Release the Action

When the project is complete, release and publish it from the project repository page on GitHub. For more information on releasing a project, refer to [this documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases). For more information on publishing GitHub actions, refer to [this documentation](https://docs.github.com/en/actions/sharing-automations/creating-actions/publishing-actions-in-github-marketplace).
