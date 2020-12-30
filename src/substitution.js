function substitution(input, alphabet, encode = true) {
  const regAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sorted = alphabet.split('').sort().join('');
  if (alphabet.length !== 26 || regAlphabet !== sorted) return false;

  const sortedAlphabet = regAlphabet.split('');
  const randomAlphabet = alphabet.split('');
  const result = [];

  if (encode) {
    input.toLowerCase().split(' ').forEach(words => {
      let temp = '';
      words.split('').forEach(character => {
        temp += randomAlphabet[sortedAlphabet.indexOf(character)];
      });
      result.push(temp);
    });
  } else {
    input.toLowerCase().split(' ').forEach(words => {
      let temp = '';
      words.split('').forEach(character => {
        temp += sortedAlphabet[randomAlphabet.indexOf(character)];
      });
      result.push(temp);
    });
  }
  return result.join(' ');
}

module.exports = substitution;
