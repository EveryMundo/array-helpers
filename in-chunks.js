function inChunks (a, chunkLen) {
  if (chunkLen < 1) {
    throw new Error(`n[${chunkLen}] < 1`)
  }

  const { constructor } = a
  if (chunkLen >= a.length) {
    return [constructor.from(a)]
  }

  const numberOfChunks = Math.ceil(a.length / chunkLen)
  const res = new constructor(numberOfChunks)

  for (let i = 0; i < numberOfChunks; i++) {
    let currentChunkLength = chunkLen
    if ((i * chunkLen + chunkLen) > a.length) {
      currentChunkLength = (i * chunkLen + chunkLen) - a.length
    }
    res[i] = new constructor(+currentChunkLength)

    for (let ix, j = 0; j < currentChunkLength && (ix = i * chunkLen + j) < a.length; j++) {
      res[i][j] = a[ix]
    }
  }

  return res
}

module.exports = inChunks
