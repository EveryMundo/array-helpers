const lazyCall = require('@danielsan/node-lazy-loader')(module)

module.exports = {
  get List () { return lazyCall('List', './classes/list') },
  get typeOf () { return lazyCall('typeOf', './type-of', 'typeOf') },
  get flat10 () { return lazyCall('flat10', './flat10', 'flat10') },
  get chunksGenerator () { return lazyCall('chunksGenerator', './chunks-generator') },
  get inChunks () { return lazyCall('inChunks', './in-chunks') }
}
