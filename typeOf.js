'use strict';

function typeOf(a) {
  return {}.toString.call(a).toLocaleLowerCase().match(/object ([^\]]+)/)[1];
}

module.exports = { typeOf };
