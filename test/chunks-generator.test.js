'use strict'

describe('chunksGenerator', () => {
  const { expect } = require('chai')
  const chunksGenerator = require('../chunks-generator')
  const List = require('../classes/list')

  context('chunk size < 1', () => {
    it('should throw an Error', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const caller = () => Array.from(chunksGenerator(array, 0))

      expect(caller).to.throw(Error, 'Chunk Length has to be a valid Number greater than 0')
    })
  })

  context('array.length > chunk size', () => {
    it('should return 1 chunk with a similar array but not the same array', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const result = Array.from(chunksGenerator(array, 20))
      const expected = [array]

      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(array)
    })
  })

  context('input type is a Int32Array', () => {
    it('should return 2 chunk with a similar array but not the same array', () => {
      const list = new Int32Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11])
      const result = Array.from(chunksGenerator(list, 5))
      const expected = [new Int32Array([1, 2, 3, 4, 5]), new Int32Array([6, 7, 8, 9, 0]), new Int32Array([11])]

      expect(result).to.deep.equal(expected)
      expect(result[0]).to.be.instanceof(Int32Array)
      expect(result[1]).to.be.instanceof(Int32Array)
      expect(result[2]).to.be.instanceof(Int32Array)
    })
  })

  context('input type is a List', () => {
    it('should return 2 chunk with a similar array but not the same array', () => {
      const List = require('../classes/list')
      const list = new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
      const result = List.from(chunksGenerator(list, 5))
      const expected = new List(new List(1, 2, 3, 4, 5), new List(6, 7, 8, 9, 0))

      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(list)
      expect(result[0]).to.be.instanceof(List)
      expect(result[1]).to.be.instanceof(List)
    })
  })

  context('array.length < chunk size', () => {
    it('should return the proper chunks', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const result = Array.from(chunksGenerator(array, 2))
      const expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]]

      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(array)
    })
  })

  context('array.length vs chunk size results in uneven last item', () => {
    it('should return the last item smaller', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1000]
      const result = Array.from(chunksGenerator(array, 2))
      const expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0], [1000]]

      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(array)
    })
  })

  context.skip('array.length < chunk size', () => {
    it('should return the proper chunks', () => {
      const list = List.ify([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
      const result = list.chunksGeneratorOf(2)
      const expected = List.ify([[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]])

      expect(result).to.be.instanceof(List)
      expect(result).to.deep.equal(expected)
      expect(result[0]).to.not.equal(list)
    })
  })
})
