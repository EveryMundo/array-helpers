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

module.exports = List;