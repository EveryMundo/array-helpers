'use strict'

describe('flat10', () => {
  const { expect } = require('chai')
  const { flat10 } = require('../')

  context('When dealing with arrays', () => {
    it('should correctly flatten all levels of the array', () => {
      const array = [1, [2, [3, [4, [5, [6], 7], 8], 9], 0]]
      const result = flat10(array)
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

      expect(result).to.deep.equal(expected)
    })
  })

  context('When passing null as second argument', () => {
    it('should correctly flatten all levels of the array', () => {
      const array = [1, [2, [3, [4, [5, [6], 7], 8], 9], 0]]
      const result = flat10(array, null)
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

      expect(result).to.deep.equal(expected)
    })
  })

  context('When dealing with arguments object', () => {
    const array = []

    function pustArgsToArray () {
      // eslint-disable-next-line prefer-rest-params
      array.push(arguments)
    }

    it('should correctly flatten all levels of the array', () => {
      pustArgsToArray(1, 2, 3)
      pustArgsToArray([1, 2, 3])
      pustArgsToArray([1], [2], [3])
      pustArgsToArray([1, [2, [3]]])

      const result = flat10(array)
      const expected = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]

      expect(result).to.deep.equal(expected)
    })
  })
})
