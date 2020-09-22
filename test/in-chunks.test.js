'use strict'

describe('inChunks', () => {
  const { expect } = require('chai')
  const inChunks = require('../in-chunks')
  const List = require('../classes/list')

  context('chunk size < 1', () => {
    it('should throw an Error', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const caller = () => inChunks(array, 0)

      expect(caller).to.throw(Error, 'Chunk Length has to be a valid Number greater than 0')
    })
  })

  context('array.length > chunk size', () => {
    it('should return 1 chunk with a similar array but not the same array', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const result = inChunks(array, 20)
      const expected = [array]

      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(array)
    })
  })

  context('array.length < chunk size', () => {
    it('should return the proper chunks', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'x']
      const result = inChunks(array, 2)
      const expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0], ['x']]
      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(array)
    })
  })

  context('array.length < chunk size', () => {
    it('should return the proper chunks', () => {
      const list = List.ify([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
      const result = list.inChunksOf(2)
      const expected = List.ify([[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]])

      expect(result).to.be.instanceof(List)
      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(list)
    })
  })

  context('list.length == total ', () => {
    it('total should equals the length of the original list', () => {
      const list = List.ify(Array.apply(null, Array(103)).map(function (x, i) { return i }))
      const result = list.inChunksOf(21)
      let total = 0
      result.forEach((element) => {
        total += element.length
      })
      expect(total).to.deep.equal(list.length)
    })
  })
})
