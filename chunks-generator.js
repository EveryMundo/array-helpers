function * chunksGenerator (a, chunkLen) {
  if (chunkLen < 1) {
    throw new Error(`n[${chunkLen}] < 1`)
  }

  const { constructor } = a
  if (chunkLen >= a.length) {
    return yield constructor.from(a)
  }

  const numberOfChunks = Math.ceil(a.length / chunkLen)
  // const res = new constructor(numberOfChunks)
  for (let i = 0; i < numberOfChunks; i++) {
    const chunk = new constructor(+chunkLen)

    for (let ix, j = 0; j < chunkLen && (ix = i * chunkLen + j) < a.length; j++) {
      chunk[j] = a[ix]
    }

    yield chunk
  }
}

module.exports = chunksGenerator
