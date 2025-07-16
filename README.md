# @everymundo/array-helpers
Helpers to handle array operations in a more elegant way

## Installation
```sh
npm i @everymundo/array-helpers
```

## Available Features

This package provides several utilities for working with arrays:

- **[flat10](#flat10)** - Deep array flattening
- **[inChunks](#inchunks)** - Split arrays into chunks
- **[chunksGenerator](#chunksgenerator)** - Generator for iterating chunks
- **[typeOf](#typeof)** - Enhanced type detection
- **[List](#list-class)** - Extended Array class with additional methods

## API Reference

### flat10

This function flattens an array deeply, hence the name flat10 (flatten), do you get it?

```js
const { flat10 } = require('@everymundo/array-helpers');

const arrayInput = [1, [2, [3, [4], [5], [6, 7]]], [8, [9]]];
const arrayOutput = flat10(arrayInput);

console.log(arrayOutput); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**Advanced usage with iterables:**
```js
const { flat10 } = require('@everymundo/array-helpers');

// Works with Set and other iterables
const setInput = [1, new Set([2, 3]), [4, 5]];
console.log(flat10(setInput)); // [1, 2, 3, 4, 5]

// Works with arguments object
function example() {
  return flat10([1, arguments, 3]);
}
console.log(example(2)); // [1, 2, 3]
```

### inChunks

Splits an array into chunks of a specified size.

```js
const { inChunks } = require('@everymundo/array-helpers');

const arrayInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const CHUNK_SIZE = 5;

// Split in chunks of 5 elements each
const arrayOutput = inChunks(arrayInput, CHUNK_SIZE);
console.log(arrayOutput); 
// [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
```

**Working with different array types:**
```js
const { inChunks } = require('@everymundo/array-helpers');

// Works with typed arrays
const typedArray = new Int32Array([1, 2, 3, 4, 5, 6, 7, 8]);
const chunks = inChunks(typedArray, 3);
console.log(chunks); // [ Int32Array(3) [ 1, 2, 3 ], Int32Array(3) [ 4, 5, 6 ], Int32Array(2) [ 7, 8 ] ]
```

### chunksGenerator

A memory-efficient generator that yields chunks of an array without creating all chunks at once.

```js
const { chunksGenerator } = require('@everymundo/array-helpers');

const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);

// Process chunks one at a time
for (const chunk of chunksGenerator(largeArray, 1000)) {
  // Process chunk of 1000 elements
  console.log(`Processing chunk of ${chunk.length} elements`);
  // Do something with chunk...
}
```

**Advanced generator usage:**
```js
const { chunksGenerator } = require('@everymundo/array-helpers');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Convert to array if needed
const allChunks = Array.from(chunksGenerator(data, 3));
console.log(allChunks); // [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]

// Use with different constructor
const result = Array.from(chunksGenerator(data, 4, Array));
console.log(result); // [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10] ]
```

### typeOf

Enhanced type detection that returns more specific type information than the native `typeof`.

```js
const { typeOf } = require('@everymundo/array-helpers');

console.log(typeOf([1, 2, 3]));        // 'array'
console.log(typeOf('hello'));          // 'string'
console.log(typeOf(123));              // 'number'
console.log(typeOf({ a: 1 }));         // 'object'
console.log(typeOf(null));             // 'null'
console.log(typeOf(undefined));        // 'undefined'
console.log(typeOf(new Date()));       // 'date'
console.log(typeOf(/regex/));          // 'regexp'
console.log(typeOf(() => {}));         // 'function'
```

**Practical usage example:**
```js
const { typeOf } = require('@everymundo/array-helpers');

function processData(input) {
  const inputType = typeOf(input);
  
  switch (inputType) {
    case 'array':
      return input.map(item => item * 2);
    case 'string':
      return input.toUpperCase();
    case 'number':
      return input * 2;
    default:
      throw new Error(`Unsupported type: ${inputType}`);
  }
}
```

### List Class

An extended Array class that provides additional convenient methods for array operations.

```js
const { List } = require('@everymundo/array-helpers');

// Create a List
const list = new List(1, 2, 3, 4, 5);
// or use List.ify() for conversion
const listFromArray = List.ify([1, 2, 3, 4, 5]);
```

#### Properties

**`firstItem`** - Get the first element:
```js
const list = List.ify([1, 2, 3, 4, 5]);
console.log(list.firstItem); // 1
```

**`lastItem`** - Get the last element:
```js
const list = List.ify([1, 2, 3, 4, 5]);
console.log(list.lastItem); // 5
```

#### Methods

**`flatten()`** - Flatten the list deeply:
```js
const nestedList = List.ify([1, [2, [3, 4]], 5]);
console.log(nestedList.flatten()); // List [ 1, 2, 3, 4, 5 ]
```

**`unique()`** - Remove duplicate elements:
```js
const duplicateList = List.ify([1, 2, 2, 3, 3, 4]);
console.log(duplicateList.unique()); // List [ 1, 2, 3, 4 ]
```

**`inChunksOf(n)`** - Split into chunks:
```js
const list = List.ify([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(list.inChunksOf(3)); 
// List [ List [ 1, 2, 3 ], List [ 4, 5, 6 ], List [ 7, 8 ] ]
```

#### Static Methods

**`List.ify(input)`** - Convert any input to a List:
```js
const { List } = require('@everymundo/array-helpers');

// From array
console.log(List.ify([1, 2, 3])); // List [ 1, 2, 3 ]

// From string
console.log(List.ify('hello')); // List [ 'hello' ]

// From any iterable
console.log(List.ify(new Set([1, 2, 3]))); // List [ 1, 2, 3 ]

// Returns same object if already a List
const existingList = List.ify([1, 2, 3]);
console.log(List.ify(existingList) === existingList); // true

// Handles null/undefined
console.log(List.ify(null)); // List []
console.log(List.ify(undefined)); // List []
```

## Real-World Usage Examples

### Data Processing Pipeline
```js
const { List, flat10, typeOf } = require('@everymundo/array-helpers');

// Process nested data structure
const rawData = [
  { items: [1, 2, 3] },
  { items: [4, [5, 6]] },
  { items: [[7, 8], 9] }
];

const result = List.ify(rawData)
  .map(obj => obj.items)
  .flatten()
  .unique()
  .inChunksOf(3);

console.log(result); // List of chunks with unique flattened values
```

### Memory-Efficient Large Data Processing
```js
const { chunksGenerator } = require('@everymundo/array-helpers');

async function processBigData(largeDataSet) {
  for (const chunk of chunksGenerator(largeDataSet, 100)) {
    // Process 100 items at a time to avoid memory issues
    await processChunk(chunk);
  }
}
```

### Type-Safe Data Validation
```js
const { typeOf, List } = require('@everymundo/array-helpers');

function validateAndProcess(data) {
  const dataType = typeOf(data);
  
  if (dataType !== 'array') {
    throw new Error(`Expected array, got ${dataType}`);
  }
  
  return List.ify(data)
    .unique()
    .filter(item => typeOf(item) === 'number');
}
```

## Error Handling

Most functions include built-in error handling:

```js
const { chunksGenerator, inChunks } = require('@everymundo/array-helpers');

// These will throw errors for invalid chunk sizes
try {
  Array.from(chunksGenerator([1, 2, 3], 0)); // Error: Chunk Length has to be a valid Number greater than 0
} catch (error) {
  console.error(error.message);
}

try {
  inChunks([1, 2, 3], -1); // Error: Chunk Length has to be a valid Number greater than 0
} catch (error) {
  console.error(error.message);
}
```

## Testing

You can find comprehensive tests for all functions in the [test](test/) directory. Run tests with:

```sh
npm test
```

## Performance Considerations

- **chunksGenerator**: Use for large datasets to avoid memory issues
- **List class**: Inherits Array performance characteristics
- **flat10**: Efficient recursive flattening without creating intermediate arrays
- **unique**: Uses indexOf for compatibility, consider Set for large arrays if ES6+ is available