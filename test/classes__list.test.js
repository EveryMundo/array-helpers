'use strict';

describe('List', () => {
  const { expect } = require('chai');
  const { List } = require('../');

  it('should be a Function', () => {
    expect(List).to.be.instanceof(Function);
  });

  it('should create objects instanceof List', () => {
    const instance = new List();
    expect(instance).to.be.instanceof(List);
  });

  it('should create objects instanceof Array', () => {
    const instance = new List();
    expect(instance).to.be.instanceof(Array);
  });

  context('Its instance', () => {
    it('should have property firstItem', () => {
      const instance = new List();
      expect(instance).to.have.property('firstItem');
    });

    it('should have property lastItem', () => {
      const instance = new List();
      expect(instance).to.have.property('lastItem');
    });

    it('should have property flatten', () => {
      const instance = new List();
      expect(instance).to.have.property('flatten');
    });

    context('instance.firstItem', () => {
      it('should return the first item of the list', () => {
        const instance = new List(1, 2, 3, 4);
        expect(instance).to.have.property('firstItem', 1);
      });
    });

    context('instance.lastItem', () => {
      it('should return the first item of the list', () => {
        const instance = new List(1, 2, 3, 4);
        expect(instance).to.have.property('lastItem', 4);
      });
    });

    context('instance.flatten()', () => {
      it('should return the first item of the list', () => {
        const instance = new List(1, [2], 3, [4, [5]], 6, [7, [8, [9]]], 10);
        const expected = new List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        const result   = instance.flatten();

        expect(result).to.deep.equal(expected);
      });
    });
  });
});