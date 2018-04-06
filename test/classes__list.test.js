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

  it('should have a property named ify', () => {
    expect(List.ify).to.be.instanceof(Function);
  });

  context('List.ify', () => {
    it('should return an instance of List', () => {
      const result = List.ify();

      expect(result).to.be.instanceof(List);
    });

    context('when receiving a List object as argument', () => {
      it('should return the very same object', () => {
        const input  = new List(1, 2, 3);
        const result = List.ify(input);

        expect(result).to.equal(input, `result === input is ${result === input}`);
      });
    });

    context('when receiving a String', () => {
      it('should return a list containing the whole string as one single element', () => {
        const input    = 'Some String';
        const result   = List.ify(input);
        const expected = new List(input);

        expect(result).to.deep.equal(expected);
      });
    });

    context('when receiving an Array', () => {
      it('should return a list that mirrors the array', () => {
        const input    = [1, 2, 3];
        const result   = List.ify(input);
        const expected = input;

        expect(result).to.be.instanceof(List);
        expect(result).to.deep.equal(expected);
      });
    });

    context('when receiving anything else', () => {
      it('should return a list with the input as the single item in it', () => {
        const inputs = [true, 1, false, 0, '', {name: true}, new Date()];

        inputs.forEach((input) => {
          const result   = List.ify(input);
          const expected = new List(input);

          expect(result).to.be.instanceof(List);
          expect(result).to.deep.equal(expected);
        });
      });
    });
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
