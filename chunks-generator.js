function * chunksGenerator (a, _chunkLen, constructor = a.constructor) {
  const chunkLen = _chunkLen | 0

  if (Number.isNaN(chunkLen) || chunkLen < 1) {
    throw new Error('Chunk Length has to be a valid Number greater than 0')
  }

  if (chunkLen >= a.length) {
    return yield constructor.from(a)
  }

  const inputLength = a.length
  const numberOfChunks = Math.ceil(a.length / chunkLen)
  // const res = new constructor(numberOfChunks)
  let chunkSizeDiff
  for (let i = 0; i < numberOfChunks; i++) {
    chunkSizeDiff = inputLength - i * chunkLen
    const chunk = new constructor(chunkSizeDiff > chunkLen ? chunkLen : chunkSizeDiff)

    for (let ix, j = 0; j < chunkLen && (ix = i * chunkLen + j) < a.length; j++) {
      chunk[j] = a[ix]
    }

    yield chunk
  }
}

module.exports = chunksGenerator
