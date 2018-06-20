'use strict';

function typeOf(a) {
  return Object.prototype.toString.call(a).toLocaleLowerCase().match(/object ([^\]]+)/)[1];
}

module.exports = { typeOf };
