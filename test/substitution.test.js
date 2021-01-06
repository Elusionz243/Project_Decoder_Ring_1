// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution.js');

describe('substitution', () => {
  const mixedAlphabet = 'xoyqmcgrukswaflnthdjpzibev';

  it("Should only include spaces and letters", () => {
    const expected = 'jrufscpw';
    const actual = substitution("t!hi!@#nk!ful?", mixedAlphabet);
    expect(actual).to.equal(expected);
  });

  it("When encoding, should maintain spaces throughout", () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution('You are an excellent spy', mixedAlphabet);
    expect(actual).to.equal(expected);
  });

  it("Should decode the given input", () => {
    const expected = 'thinkful';
    const actual = substitution("jrufscpw", mixedAlphabet, false);
    expect(actual).to.equal(expected);
  });

  it("Should return false if alphabet parameter is not a string of exactly 26 characters.", () => {
    const actual = substitution('thinkful', 'short');
    expect(actual).to.be.false;
  });

  it("Should return false if all of the characters in the alphabet parameter are not unique.", () => {
    const actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
    expect(actual).to.be.false;
  });

  it('Should return false if input is missing', () => {
    const actual = substitution("", mixedAlphabet);
    expect(actual).to.be.false;
  });

  it('Should return false if alphabet is missing', () => {
    const actual = substitution(mixedAlphabet);
    expect(actual).to.be.false;
  });

});