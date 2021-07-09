# JS File Executor

A lib that can execute all the Javascript files in the specified directory.

# Support

Join our [Discord Server](http://discord.abdevs.org) for any support related queries.

# Installing

`npm i @abdevs/js-file-executor`

You can add this code in your `index.js`.

```js
const fileExecutor = require('@abdevs/js-file-executor');

const arg1 = 'Hello';
const arg2 = 'World';

fileExecutor('DIRECTORY-PATH', arg1, arg2);
```

Then add any amount of Javascript in the specified directory with a exported function.

`file.js`

```js
module.exports = (arg1, arg2) => {
  console.log(`${arg1} ${arg2}`); //Output on execute: "Hello World"
};
```

You can pass as many arguments as you want.

# Terms and Conditions

This Repository only available for code look up and personal use.

You are not allowed to steal the code from this repository.
