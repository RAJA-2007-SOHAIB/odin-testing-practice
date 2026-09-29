import { caesarCipher } from './caesarCipher';

test('caesarCipher exists', () => {
  expect(caesarCipher).toBeDefined();
});

test('caesarCipher ciphers', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});
test('caesarCipher ciphers 2', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('caesarCipher does not cipher special chars', () => {
  expect(caesarCipher(' $%6', 3)).toBe(' $%6');
});

test('caesarCipher ciphers by wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('caesarCipher works on empty string', () => {
  expect(caesarCipher('', 3)).toBe('');
});

test('caesarCipher ciphers by preserving case', () => {
  expect(caesarCipher('AbC', 3)).toBe('DeF');
});
test('caesarCipher ciphers at any given number', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
});
test('caesarCipher ciphers by taking remainder', () => {
  expect(caesarCipher('AbC', 27)).toBe('BcD');
});
test('caesarCipher ciphers also at 0', () => {
  expect(caesarCipher('AbCd', 0)).toBe('AbCd');
});
test('caesarCipher works with mixed case and punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
