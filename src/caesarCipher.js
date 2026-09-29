const caesarCipher = function (something, shiftBy) {
  let ciphered = '';
  if (!something) return ciphered;
  for (let char of something) {
    ciphered += helper(char, shiftBy);
  }
  return ciphered;
};

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const helper = function (char, shiftBy) {
  if (char.toUpperCase() === char.toLowerCase()) {
    return char;
  }
  if (char.toUpperCase() === char) {
    if (letters.includes(char.toLowerCase())) {
      const i = letters.indexOf(char.toLowerCase());
      return letters[(i + shiftBy) % 26].toUpperCase();
    }
  }

  if (letters.includes(char)) {
    const i = letters.indexOf(char);
    return letters[(i + shiftBy) % 26];
  }
};

export { caesarCipher };
