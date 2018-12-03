const { calculateFreq, getIntArray } = require('./calculateFreq');

const testValues = `+3
-5
+6
-0
+8
-2
+1`;

describe('Test frequency calculation', () => {
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
});
