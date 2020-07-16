# @everymundo/array-helpers
Helpers to handle array operations in a more elegant way

## Instalation
```sh
npm i @everymundo/array-helpers
```

## Helper Functions

* flat10

### flat10

This function flattens an array, hence the name flat10 (flatten), do you get it?

```js
const {flat10} = require('@everymundo/array-helpers');
// or
// const {flat10} = require('@everymundo/array-helpers/flat10');

const arrayInput = [1, [2, [3, [4], [5], [6, 7]]], [8, [9]]];

const arrayOutput = flat10(arrayInput);

console.log(arrayOutput); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

You can read the test code in [test/flat10.test.js](test/flat10.test.js) for more examples.
