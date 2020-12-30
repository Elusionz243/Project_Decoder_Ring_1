const alphabet = [
  { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
  { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
  { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
  { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
  { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }
];

function polybius(input, encode = true) {
  if (encode) {
    const lowerCase = input.toLowerCase().split(' ');
    let encrypted = [];
    let encryption = '';
    for (let i = 0; i < lowerCase.length; i++) {
      let words = lowerCase[i].split('');
      words.forEach(character =>
        alphabet.forEach(char => character === char.char ? encryption += char.pos : encryption));
      encrypted.push(encryption);
      encryption = '';
    }
    return encrypted.join(' ');
  } else {
    const split = input.split(' ');
    if(split.join('').length % 2 !== 0) return false;
    let decryption = '';
    let decrypted = [];

    for (let i = 0; i < split.length; i++) {
      let pairs = split[i].match(/\d{1,2}/g);
      pairs.forEach(pair => {
        if (parseInt(pair) === 42) {
          decryption += '(i/j)';
        }
        alphabet.forEach(character => parseInt(pair) === character.pos && parseInt(pair) !== 42 ? decryption += character.char : decryption);
      });
      decrypted.push(decryption);
      decryption = '';
    }
    return decrypted.join(' ');
  }
}

module.exports = polybius;