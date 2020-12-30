// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar.js');

describe('caesar', () => {
  it('It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.', () => {
    const actual1 = caesar('thinkful', 99);
    const actual2 = caesar('thinkful', -26);
    const actual3 = caesar('thinkful');
    expect(actual1 && actual2 && actual3).to.be.false;
  });
  
  it('It ignores capital letters. (For example, the results of A Message and a message should be the same.)', () => {
    const expected = 'wklqnixo';
    const actual = caesar('thinkful', 3);
    const actual1 = caesar('THINKFUL', 3);
    expect(actual && actual1).to.equal(expected);
  });

  it('When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)', () => {
    const expected = 'c';
    const actual = caesar('z', 3);
    const expected1 = 'x';
    const actual1 = caesar('a', -3);
    expect(actual).to.equal(expected) && expect(actual1).to.equal(expected1);
  });

  it('Spaces should be maintained throughout, as should other non-alphabetic symbols.', () => {
    const encodedExpected = 'bpqa qa i amkzmb umaaiom!';
    const encodeActual = caesar('This is a secret message!', 8);
    const decodedExpected = 'this is a secret message!';
    const decodeActual = caesar('bpqa qa i amkzmb umaaiom!', 8, false);
    expect(encodeActual).to.equal(encodedExpected) && expect(decodeActual).to.equal(decodedExpected);
  });

});