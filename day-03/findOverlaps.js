function findOverlaps(areasList) {
  const field = [];
  areasList.forEach(area => {
    // extract all the variables from the string
    const [id, [[x, y], [width, height]]] = area
      .split('@')
      .map((areaPart, index) =>
        index === 0
          ? areaPart.split('#')[1].trim()
          : areaPart
              .split(':')
              .map((coordsPart, coordsIndex) =>
                coordsPart
                  .split(coordsIndex === 0 ? ',' : 'x')
                  .map(val => parseInt(val.trim(), 10))
              )
      );
    // fill a 2d array with 0s if it is the first time adding that field
    // and add 1 for each next time
    for (let i = x, iEnd = width + x; i < iEnd; i += 1) {
      for (let j = y, jEnd = height + y; j < jEnd; j += 1) {
        if (!field[i]) {
          field[i] = [];
        }
        if (field[i][j] === undefined) {
          field[i][j] = 0;
        } else {
          field[i][j] += 1;
        }
      }
    }
  });
  // flatten the 2d array and count all fields with value > 0
  return field
    .reduce((flatted, current) => flatted.concat(current), [])
    .reduce((sum, current) => sum + (current ? 1 : 0), 0);
}

module.exports = {
  findOverlaps,
};
