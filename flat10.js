'use strict'

function flat10 (_a, _o = []) {
  const a = Array.isArray(_a) ? _a : Array.from(_a)
  const o = _o || []

  for (let i = a.length, j = 0; j < i; j++) {
    const itIsNotAString = a[j] && typeof a[j] !== 'string'
    const itExtendsIterator = typeof a[j][Symbol.iterator] === 'function';
    // eslint-disable-next-line no-unused-expressions
    // (a[j] && (Array.isArray(a[j]) || typeOf(a[j]) === 'arguments')) ?
    // eslint-disable-next-line no-unused-expressions
    (itIsNotAString && itExtendsIterator)
      ? flat10(a[j], o)
      : o.push(a[j])
  }

  return o
}

module.exports = { flat10 }
