const alphabet = [
  { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
  { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
  { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
  { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
  { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }
];

function polybius(input, encode = true) {
  if (!input) return false;
  let result = '';
  let finalResult = [];
  if (encode) {
    input.toLowerCase().split(' ').forEach(word => {
      word.split('').forEach(character => {
        if (character.match(/([^a-z\s])/g)) {
          result;
        } else {
          alphabet.forEach(match => match.char === character ? result += match.pos : result);
        }
      });
      finalResult.push(result);
      result = '';
    });
  } else if (!encode) {
    if (input.split(' ').join('').length % 2 !== 0) return false;
    input.split(' ').forEach(decryptedWord => {
      decryptedWord.match(/\d{1,2}/g).forEach(num => {
        if (parseInt(num) === 42) {
          result += `(i/j)`;
        } else {
          alphabet.forEach(match => parseInt(num) === match.pos ? result += match.char : result);
        }
      });
      finalResult.push(result);
      result = '';
    });
  }
  return finalResult.join(' ');
}

module.exports = polybius;