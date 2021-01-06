
function caesar(input, shift, encode = true) {
  if (shift < -25 || shift > 25 || !shift || shift === 0 || !input) return false;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';
  let finalResult = [];
  // Splitting the string by words, and Looping through every word in the [input] array.
  input.toLowerCase().split(' ').forEach(word => {
    
    // Splitting every word into it's own [word] and looping through it
    word.split('').forEach(character => {

      // Checking to make sure the character we're testing is a lowercase letter.
      if (character.match(/[a-z]/g)) {

        // If we're encoding run this VVVVVVVV
        if (encode) {

          // Getting the index of the character and adding the shift value to the index:
          // Example ('a' => 0 + shift => 3) so you're new character is 'd'.
          let index = alphabet.indexOf(character) + shift;

          // testing if the index value is more than the length of the alphabet. if true, will wrap around to the beginning of the [ alphabet ]
          if (index >= alphabet.length) {
            result += alphabet[index - 26];

          // Testing if the index value falls below 0. if true, will wrap to the end of the [ alphabet ]
          } else if (index <= 0) {
            result += alphabet[index + 26];
          // If none of those are true, then I'm going to just add whatever character at the index variable to the result string.
        } else {
          result += alphabet[index];
        }
        // Decoding VVVVVV opposite of encoding.
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

      // If the character is a special symbol, add it to the result string.
      } else {
        result += character;
      }
    });

    // [ finalResult ] adds the words to the array
    finalResult.push(result);
    result = '';
  });

  // Takes the [ finalResult ] and makes it a complete sentence.
  return finalResult.join(' ');

}

module.exports = caesar;
