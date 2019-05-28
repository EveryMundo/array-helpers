'use strict'

describe('typeOf', () => {
  const { expect } = require('chai')
  const { typeOf } = require('../type-of')

  context('When dealing with arrays', () => {
    it('should correctly detect the type as array', () => {
      const array = [1, [2, [3, [4, [5, [6], 7], 8], 9], 0]]
      const result = typeOf(array)
      const expected = 'array'

      expect(result).to.deep.equal(expected)
    })

    it('should correctly detect the type as object', () => {
      const object = {}
      const result = typeOf(object)
      const expected = 'object'

      expect(result).to.deep.equal(expected)
    })

    it('should correctly detect the type as string', () => {
      const string = ''
      const result = typeOf(string)
      const expected = 'string'

      expect(result).to.deep.equal(expected)
    })
  })
})
