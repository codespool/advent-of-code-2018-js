const { findChecksum, findCommonLetters } = require('./findChecksum');

const checksumTestValues = [
  'abcdef',
  'bababc',
  'abbcde',
  'abcccd',
  'aabcdd',
  'abcdee',
  'ababab',
];

const commonLettersTestValues = [
  'abcde',
  'fghij',
  'klmno',
  'pqrst',
  'fguij',
  'axcye',
  'wvxyz',
];

describe('Test day 02', () => {
  test('Test finding checksum', () =>
    expect(findChecksum(checksumTestValues)).toBe(12));

  test('Test finding common letters', () =>
    expect(findCommonLetters(commonLettersTestValues)).toBe('fgij'));
});
