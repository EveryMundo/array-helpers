'use strict';

function unique(list) {
  const o = [];
  for (let i = 0, l = list.length; i < l; i++) {
    if (!o.includes(list[i])) o.push(list[i]);
  }

  return o;
}

module.exports = { unique };
