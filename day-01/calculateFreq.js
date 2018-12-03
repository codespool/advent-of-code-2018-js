function getIntArray(stringList) {
  const splitValues = stringList.split('\n');
  return splitValues.map(value => parseInt(value, 10));
}

function calculateFreq(freqList) {
  return freqList.reduce((prev, current) => prev + current, 0);
}

module.exports = {
  getIntArray,
  calculateFreq,
};
