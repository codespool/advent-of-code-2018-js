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
  freqList = new Set([0])
) {
  const uniqueFreqList = freqList;
  let sum = currentSum;
  for (let i = 0, max = freqModifiers.length; i < max; i += 1) {
    sum += freqModifiers[i];
    if (uniqueFreqList.has(sum)) return sum;
    uniqueFreqList.add(sum);
  }
  return findFirstDuplicate(freqModifiers, sum, uniqueFreqList);
}
module.exports = {
  getIntArray,
  calculateFreq,
  findFirstDuplicate,
};
