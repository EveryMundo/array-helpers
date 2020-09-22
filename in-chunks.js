const chunksGenerator = require('./chunks-generator')
function inChunks (a, _chunkLen, constructor = a.constructor) {
  return constructor.from(chunksGenerator(a, _chunkLen, constructor))
}

module.exports = inChunks
