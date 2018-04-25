# What is Relens? 🍉

This is a holding tank for the next iteration of Lens, the Looker style and component resource. This repository will likely take over looker/lens when appropriate.

Inside this repository are both the core components Lens provides and the code for a styleguide which will eventually live at lens.looker.com as an interactive resource. 

# Requirements

### Yarn

[`yarn`](https://yarnpkg.com/en/) must be installed. If you don't, have a look at https://yarnpkg.com/en/docs/install and decide what's the best option for you.
 
### .npmrc 
 
You must add an .npmrc file in order to pull packages and publish to our private npm registry.

Create a `.npmrc` file in the root of the project. `.npmrc` is already ignored by .gitignore, so you should never check it in. Copy and paste the below content into it:

```bash
registry=https://nexusrepo.looker.com/repository/looker-npm-group/
always-auth=true
_auth=<REPLACE_THIS>
```

Now we'll generate the auth token. If you have Helltool installed and running you've likely already setup your gradle.properties file to connect to our Nexus server. [If not take a look at those directions and follow them so you can get the Nexus server user and password first](https://github.com/looker/helltool#dependencies).

Find `~/.gradle/gradle.properties`, from it extract the `nexusUser` and `nexusPass` values. Run them through the following command, replacing `<nexusUser>` and `<nexusPass>` with the values in the gradle.properties file.

`echo -n '<nexusUser>:<nexusPass>' | openssl base64`

> Note the `:` between nexusUser and nexusPass, you must include that colon! 

Take the resulting value and replace the `<REPLACE_THIS>` token in your `.npmrc` file with it, save the file and close it.

You should now be able to run `yarn` in the project root without error.

# Project Scripts

Each of these scripts can be run with `yarn <command>`. They are defined in the package.json `scripts` stanza.

 * **start** starts the Styleguidist server
 * **build** builds the components and the static Styleguidist pages
 * **build-components** builds just the React components, inlining their styles
 * **build-styleguide** builds just the Styleguidist guide
 * **clean** removes the `dist` and `styleguide` directories if they exist
 * **release** runs the publishing process, distributing the package to Looker's private package repository
 * **test** runs the unit tests

# Running the Styleguide

Lens is based on the [Styleguidist](https://react-styleguidist.js.org/) library. You can view its generated output by following

1. Run the commands below:
1. `git clone git@github.com:looker/relens.git` 
1. `yarn`
1. `yarn start`
1. Open [http://localhost:6060](http://localhost:6060) in a browser

# Creating a Component

Components are stored under `src/components/`. By convention they live in their own subdirectory, named the same as the component itself. For example a Card component would expect to be found under `src/components/Card`.

## Overview

Components are written in Typescript, leveraging the React framework. They use ES6 `import` statements to include their dependencies including style dependencies in the form of SCSS documents.

> It's assumed that for now developers will run `yarn start` and have a development server running in the background while they work. This allows the d.ts files for all related SASS stylesheets to be correctly generated.

## SCSS

Components that wish to integrate styling can import their styles using the ES6 import syntax like so:

`import styles from './buttons.scss'`

There are a few important considerations here:

1. The import statement must end in `.scss` to be recognized as style, imported, and interpreted.
1. The `styles` object generated is a map from the original style names to CSS Module names. This means you cannot reference the original classnames in your React component code. CSS Modules ensure portability and eliminate namespace conflicts when used in other apps.
1. The `styles` object requires a d.ts file to please Typescript. This is automatically generated for you when running the Styleguidist server `yarn start`. These d.ts files should be added to the git repository.  

## Integrating with Styleguidist

Styleguidist has two conventions that must be followed to leverage its documentation generation functionality:

1. Each component must be defined in its own file and exported from it.
1. Each component to be documented should have a corresponding Markdown file. If there is a Card.tsx component file, there needs to be a Card.md file to generate documentation.

Styleguidist allows all Markdown syntax, and inside the js code fences, will render any JSX tags corresponding to the Lens components.

## Testing 

Tests are written using the Jest testing framework, which uses a Jasmine test like syntax and supports snapshot testing. Take a look at the [Button tests](src/components/buttons/button.test.tsx) for more detail. Note, test files must end in `.test.tsx` to be discovered by the testing framework. Snapshots generated by the snapshot tests must be added to the repository to remain valid.

## Publishing

To publish:

1. Increment the version number in `package.json`
2. run `yarn release`

This will publish Lens to a private repository hosted by Looker.

# Gotchas

 * Occasionally Styleguidist seems to crash, especially when it is trying to compile invalid React code. If you suddenly start noticing your style d.ts files are no longer valid, ensure your Styleguidist server is still running. 
