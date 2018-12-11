function findChecksum(stringList) {
  let pairsCount = 0;
  let tripletsCount = 0;

  stringList.forEach(element => {
    const split = element.split('');
    const map = {};
    let foundPair = false;
    let foundTriplet = false;
    split.forEach(char => {
      if (map[char]) {
        map[char] += 1;
      } else {
        map[char] = 1;
      }
    });
    Object.values(map).forEach(value => {
      if (value === 2 && !foundPair) {
        pairsCount += 1;
        foundPair = true;
      }
      if (value === 3 && !foundTriplet) {
        tripletsCount += 1;
        foundTriplet = true;
      }
    });
  });
  return pairsCount * tripletsCount;
}

function findCommonLetters(stringList, currentIndex = 0) {
  const currentWord = stringList[currentIndex].split('');
  for (
    let wordIndex = currentIndex + 1, max = stringList.length;
    wordIndex < max;
    wordIndex += 1
  ) {
    let mismatchCount = 0;
    let mismatchIndex = null;
    for (
      let letterIndex = 0, jMax = currentWord.length;
      letterIndex < jMax;
      letterIndex += 1
    ) {
      if (currentWord[letterIndex] !== stringList[wordIndex][letterIndex]) {
        mismatchCount += 1;
        mismatchIndex = letterIndex;
        if (mismatchCount > 1) break;
      }
    }
    if (mismatchCount === 1) {
      currentWord.splice(mismatchIndex, 1);
      return currentWord.join('');
    }
  }
  return findCommonLetters(stringList, currentIndex + 1);
}

module.exports = {
  findChecksum,
  findCommonLetters,
};
