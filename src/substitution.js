function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26 || !input || (typeof alphabet !== 'string') || (typeof input !== 'string')) return false;

  const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetSet = new Set();

  for (let letter of alphabet) {
    if (!alphabetSet.has(letter)) {
      alphabetSet.add(letter);
    } else {
      return false;
    }
  }
  const alphabetArr = alphabet.split('');
  const result = [];

  if (encode) {
    input.toLowerCase().split(' ').forEach(word => {
      let encrypt = '';
      word.split('').forEach(character => {
        const index = originalAlphabet.indexOf(character);
        encrypt += alphabetArr[index];
      });
      result.push(encrypt);
    });
  } else {
    const alphabetTest = input.split(' ').join('');
    for (let character of alphabetTest) {
      if (!alphabetSet.has(character)) {
        return false;
      }
    }
    input.toLowerCase().split(' ').forEach(word => {
      let decrypt = '';
      word.split('').forEach(character => {
        const index = alphabetArr.indexOf(character);
        decrypt += originalAlphabet[index];
      });
      result.push(decrypt);
    });
  }
  return result.join(' ');
}

module.exports = substitution;