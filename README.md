A sandbox environment with a basic [Jest](http://jestjs.io/) setup to make practicing TDD with Javascript easy.

---

## Setup

- Clone the repo
- Run `yarn` or `npm install` to install the project's dependencies
- Create a new branch to work on

## Run the tests

Use `yarn test` or `yarn test:watch` to run (or run and watch) the tests.

For more information on the testing framework visit http://jestjs.io/

## Javascript modules support

Both [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and
[Node.js modules](https://nodejs.org/api/modules.html) are supported. Node.js support comes
naturally and ES6 is supported via `babel.config.js`, in the root directory.

## Where to write your tests

- `app/browser/` contains examples using ES6 modules
- `app/node/` contains examples using the Node.js module system

Files have been separated in this way to reflect module systems available, natively, in the different environments.

Jest will pick up and any `.js` files in these environments.

## Browser view

To make it easy to see the result of your Javascript in a browser, a simple [Express](https://expressjs.com/) server is available, if needed.

Run `yarn start` to serve the contents of the `app/browser` directory on http://localhost:3000

Static assets in that directory include an HTML entry point for `main.js`,
from which other modules can be imported.
