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

module.exports = {
  findChecksum,
};
