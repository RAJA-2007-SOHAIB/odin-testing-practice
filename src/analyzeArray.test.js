import { analyzeArray } from './analyzeArray.js';

test('AnalyzeArray exists', () => {
  expect(analyzeArray).toBeDefined();
});
test('AnalyzeArray returns', () => {
  expect(analyzeArray(['something'])).toBeDefined();
});

test('AnalyzeArray Analyzes the array', () => {
  expect(analyzeArray([1, 1, 1, 4, -2])).toEqual({
    average: 1,
    min: -2,
    max: 4,
    Alength: 5,
  });
});
test('AnalyzeArray Analyzes to return min, max, average, and length', () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    Alength: 2,
  });
});

test('AnalyzeArray Analyzes an empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    Alength: 0,
  });
});
