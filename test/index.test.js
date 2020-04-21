'use strict'

describe('index', () => {
  const { expect } = require('chai')
  const index = require('../index')

  it('should export expected keys', () => {
    const res = Object.keys(index)
    const expected = ['List', 'typeOf', 'flat10', 'inChunks']

    expect(res).to.deep.equal(expected)
  })

  it('should export expected keys', () => {
    const expected = {
      List: require('../classes/list'),
      typeOf: require('../type-of').typeOf,
      flat10: require('../flat10').flat10,
      inChunks: require('../in-chunks')
    }

    expect(index).to.deep.equal(expected)
  })
})
