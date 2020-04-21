'use strict'

module.exports = {
  get List () { return lazyCall(this, 'List', './classes/list') },
  get typeOf () { return lazyCall(this, 'typeOf', './type-of', 'typeOf') },
  get flat10 () { return lazyCall(this, 'flat10', './flat10', 'flat10') },
  get inChunks () { return lazyCall(this, 'inChunks', './in-chunks') }
}

function lazyCall (o, property, file, subProperty) {
  const value = subProperty == null ? require(file) : require(file)[subProperty]

  return Object.defineProperty(o, property, { value })[property]
}
