// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution.js');

describe('substitution', () => {
  const mixedAlphabet = 'xoyqmcgrukswaflnthdjpzibev';

  it("Alphabet should contain all characters in the input, return false otherwise", () => {
    const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthd!pzibev', false);
    expect(actual).to.be.false;
  });

  it('Should return false if the alphabet is not a string', () => {
    const actual = substitution('thinkful', 1);
    expect(actual).to.be.false;
  });

  it('Should return false if the input in not a string', () => {
    const actual = substitution(13, 'abcdefghijklmnopqrstuvwxyz');
    expect(actual).to.be.false;
  });

  it("When encoding, should maintain spaces throughout", () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution('You are an excellent spy', mixedAlphabet);
    expect(actual).to.equal(expected);

    const expected1 = 'you are an excellent spy';
    const actual1 = substitution('elp xhm xf mbymwwmfj dne', mixedAlphabet, false);
    expect(actual1).to.equal(expected1);
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
    const actual = substitution('thinkful');
    expect(actual).to.be.false;
  });

  it('Should allow the alphabet to contain symbols and special characters', () => {
    const expected = 'jr$fscpw';
    const actual = substitution('thinkful', 'xoyqmcgr$kswaflnthdjpzibev');
    expect(actual).to.equal(expected);

    const expected1 = 'thinkful';
    const actual1 = substitution('jr$fscpw', 'xoyqmcgr$kswaflnthdjpzibev', false);
    expect(actual1).to.equal(expected1);
  });

});