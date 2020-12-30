function caesar(input, shift, encode = true) {
  if (shift < -25 || shift > 25 || !shift) return false;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';
  let finalResult = [];
  input.toLowerCase().split(' ').forEach(word => {
    word.split('').forEach(character => {
      if (character.match(/[a-z]/gi)) {
        if (encode) {
          let index = alphabet.indexOf(character) + shift;
          if (index >= alphabet.length) {
            result += alphabet[index - 26];
          } else if (index <= 0) {
            result += alphabet[index + 26];
          } else {
            result += alphabet[index];
          }
        } else if (!encode) {
          let index = alphabet.indexOf(character) - shift;
          if (index < 0) {
            result += alphabet[(index + 26)];
          } else if (index >= alphabet.length) {
            result += alphabet[index - 26];
          } else {
            result += alphabet[index];
          }
        }
      } else {
        result += character;
      }
    });
    finalResult.push(result);
    result = '';
  });
  return finalResult.join(' ');
}

module.exports = caesar;
