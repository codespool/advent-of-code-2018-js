const { findChecksum } = require('./findChecksum');

const testValues = [
  'abcdef',
  'bababc',
  'abbcde',
  'abcccd',
  'aabcdd',
  'abcdee',
  'ababab',
];

const testResult = 12;

describe('Test day 02', () => {
  test('Test finding checksum', () =>
    expect(findChecksum(testValues)).toBe(testResult));
});
