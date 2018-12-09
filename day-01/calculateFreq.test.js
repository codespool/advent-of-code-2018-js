const {
  calculateFreq,
  getIntArray,
  findFirstDuplicate,
} = require('./calculateFreq');

const testValues = `+3
-5
+6
-0
+8
-2
+1`;

describe('Test day 01', () => {
  const intArray = getIntArray(testValues);
  test('Result is an array', () => {
    expect(intArray).toBeInstanceOf(Array);
  });
  test('Array length is correct', () => {
    expect(intArray.length).toBe(7);
  });
  test.each(intArray)('Element is an int', member => {
    expect(typeof member).toBe('number');
  });
  test('Adds all elements', () => {
    expect(calculateFreq(intArray)).toBe(11);
  });
  test.each`
    valuesArray             | expected
    ${[+1, -1]}             | ${0}
    ${[+3, +3, +4, -2, -4]} | ${10}
    ${[-6, +3, +8, +5, -6]} | ${5}
    ${[+7, +7, -2, -7, -4]} | ${14}
  `('Find first duplicate frequency', ({ valuesArray, expected }) => {
    expect(findFirstDuplicate(valuesArray)).toBe(expected);
  });
});
