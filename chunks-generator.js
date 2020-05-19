function * chunksGenerator (a, _chunkLen) {
  const chunkLen = _chunkLen | 0

  if (Number.isNaN(chunkLen) || chunkLen < 1) {
    throw new Error('Chunk Length has to be a valid Number greater than 0')
  }

  // const { constructor } = a
  if (chunkLen >= a.length) {
    return yield a.constructor.from(a)
  }

  const numberOfChunks = Math.ceil(a.length / chunkLen)
  // const res = new constructor(numberOfChunks)
  for (let i = 0; i < numberOfChunks; i++) {
    // const chunk = new constructor(chunkLen)
    const chunk = []

    for (let ix, j = 0; j < chunkLen && (ix = i * chunkLen + j) < a.length; j++) {
      chunk[j] = a[ix]
    }

    yield chunk
  }
}

module.exports = chunksGenerator
