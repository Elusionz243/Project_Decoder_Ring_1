// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution.js');

describe('substitution', () => {
  it('Spaces should be maintained throughout.', () => {
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');

    expect(actual).to.equal(expected);
  });

  it('Capital letters can be ignored.', () => {
    const expected = 'jrufscpw';
    const actual1 = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    const actual2 = substitution('THINKFUL', 'xoyqmcgrukswaflnthdjpzibev')

    expect(actual1 && actual2).to.equal(expected);
  });

  it("The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false.", () => {
    const actual = substitution('Does this return false?', 'short');

    expect(actual).to.be.false;
  });

  it('Corrently translates the given phrase based on the alphabet passed', () => {
    const expected = 'gsrmpufo';
    const actual = substitution('thinkful', 'zyxwvutsrqponmlkjihgfedcba');
    
    expect(actual).to.equal(expected);
  });

  it('All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.', () => {
    const actual = substitution('thinkful', 'zzxwvutsrqponmlkjihgfedcba');

    expect(actual).to.be.false;
  });

});