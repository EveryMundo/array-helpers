const { flat10 } = require('../flat10');

class List extends Array {
  get firstItem() {
    return this[0];
  }

  get lastItem() {
    return this[this.length - 1];
  }

  flatten() {
    return List.from(flat10(this));
  }
}

/**
 * it will always return a List object
 * it will return the same object if it is already a list
 * @param {*} input
 * @returns List
 */
List.ify = (input) => {
  if (input == null) return new List();

  if (input instanceof List) return input;

  if (input.constructor === String) return new List(input);

  if (input && typeof input[Symbol.iterator] === 'function') return List.from(input);

  return new List(input);
};

module.exports = List;
