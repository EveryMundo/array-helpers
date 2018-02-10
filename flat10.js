'use strict';

const { typeOf } = require('./typeOf');

function flat10(_a, _o = []) {
  const a = Array.isArray(_a) ? _a : Array.from(_a);
  const o = _o || [];

  for (var i = a.length, j = 0; j < i; j++)
    (a[j] && (a[j].constructor === Array || typeOf(a[j]) === 'arguments')) ?
      flat10(a[j], o) :
      o.push(a[j]);

  return o;
}

module.exports = { flat10 };
