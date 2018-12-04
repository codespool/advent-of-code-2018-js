function getIntArray(stringList) {
  const splitValues = stringList.split('\n');
  return splitValues.map(value => parseInt(value, 10));
}

function calculateFreq(freqList) {
  return freqList.reduce((prev, current) => prev + current, 0);
}

function findFirstDuplicate(
  freqModifiers,
  currentSum = 0,
  freqList = new Set([0]),
  currentIndex = 0
) {
  const sum = currentSum + freqModifiers[currentIndex];
  if (freqList.has(sum)) return sum;
  freqList.add(sum);
  const newIndex = freqModifiers[currentIndex + 1] ? currentIndex + 1 : 0;
  return findFirstDuplicate(freqModifiers, sum, freqList, newIndex);
}
module.exports = {
  getIntArray,
  calculateFreq,
  findFirstDuplicate,
};
