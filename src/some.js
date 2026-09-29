function sum(a, b) {
  return a + b;
}

function capitalize(something) {
  if (!something) return '';
  return `${something[0].toUpperCase()}${something.slice(1)}`;
}

function rev(something) {
  if (!something) return '';
  return something.split('').reverse().join('');
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => {
    if (num2 === 0) {
      throw new Error();
    }
    return num1 / num2;
  },
};

const caesarCipher = function (something, shiftBy) {
  if (!something) return '';
  let ciphered = '';
  function cipherChar(aThing, shiftBy) {
    if (aThing.toLowerCase() === aThing.toUpperCase()) return aThing;
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
    if (aThing === aThing.toUpperCase()) {
      if (letters.includes(aThing.toLowerCase())) {
        const i = letters.indexOf(aThing.toLowerCase());
        return letters[(i + shiftBy) % 26].toUpperCase();
      }
    }
    if (letters.includes(aThing)) {
      const i = letters.indexOf(aThing);
      return letters[(i + shiftBy) % 26];
    }
  }
  for (let some of something) {
    ciphered += cipherChar(some, shiftBy);
  }
  return ciphered;
};

export { sum, capitalize, rev, calculator, caesarCipher };
