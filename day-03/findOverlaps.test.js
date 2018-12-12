const { findOverlaps } = require('./findOverlaps');

const testString = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`.split('\n');

describe('Testing day-03', () => {
  test('Getting correct amount of overlaps', () => {
    expect(findOverlaps(testString)).toEqual([4, 3]);
  });
});
