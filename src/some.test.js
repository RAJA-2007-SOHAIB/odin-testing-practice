import { sum, capitalize, rev, calculator, caesarCipher } from './some.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize is defined', () => {
  expect(capitalize).toBeDefined();
});
test('capitalize capitalizes', () => {
  expect(capitalize('abc')).toBe('Abc');
});
test('capitalize capitalizes again', () => {
  expect(capitalize('odin')).toBe('Odin');
});
test('capitalize capitalizes yet again', () => {
  expect(capitalize('a')).toBe('A');
});
test('capitalize did not capitalize?', () => {
  expect(capitalize('A')).toBe('A');
});
test('capitalize works on empty strings', () => {
  expect(capitalize('')).toBe('');
});

test('rev is defined', () => {
  expect(rev).toBeDefined();
});
test('rev is working', () => {
  expect(rev('abc')).toBe('cba');
});
test('rev does not work??', () => {
  expect(rev('')).toBe('');
});

test('calculator is defined', () => {
  expect(calculator).toBeDefined();
});

test('calculator.add is defined', () => {
  expect(calculator.add).toBeDefined();
});
test('calculator adds', () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test('calculator.subtract is defined', () => {
  expect(calculator.subtract).toBeDefined();
});
test('calculator subtracts', () => {
  expect(calculator.subtract(1, 3)).toBe(-2);
});

test('calculator.multiply is defined', () => {
  expect(calculator.multiply).toBeDefined();
});
test('calculator multiplies', () => {
  expect(calculator.multiply(1, 3)).toBe(3);
});

test('calculator.divide is defined', () => {
  expect(calculator.divide).toBeDefined();
});
test('calculator divides', () => {
  expect(calculator.divide(1, 3)).toBeCloseTo(0.333);
});
test('calculator returns error', () => {
  expect(() => calculator.divide(1, 0)).toThrow();
});

test('caesar Cipher exists', () => {
  expect(caesarCipher).toBeDefined();
});

test('caesar Cipher Ciphers', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});
test('caesar Cipher actually Ciphers', () => {
  expect(caesarCipher('def', 3)).toBe('ghi');
});
test('caesar Cipher Ciphers with case preservation', () => {
  expect(caesarCipher('AbC', 3)).toBe('DeF');
});
test('caesar Cipher Ciphers by wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('caesar Cipher does not Cipher non-alphas', () => {
  expect(caesarCipher('abc def!XYZ', 3)).toBe('def ghi!ABC');
});
test('caesar Cipher Ciphers shifts to any number', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});
test('caesar Cipher not works on empty strings', () => {
  expect(caesarCipher('', 1)).toBe('');
});
