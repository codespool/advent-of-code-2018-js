function findOverlaps(areasList) {
  const field = [];
  const notOverwritten = {};
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
          field[i][j] = { usageCount: 0, claimedBy: id };
          // only if id field is written to for the first time, and id is used for the first time
          if (notOverwritten[id] === undefined) {
            notOverwritten[id] = true;
          }
        } else {
          // clear both ids using the same field
          notOverwritten[id] = false;
          notOverwritten[field[i][j].claimedBy] = false;
          field[i][j].usageCount += 1;
          field[i][j].claimedBy = id;
        }
      }
    }
  });
  const uniqueId = parseInt(
    Object.entries(notOverwritten).find(([key, value]) => value)[0],
    10
  );

  return [
    field
      .reduce((flatted, current) => flatted.concat(current), [])
      .reduce((sum, current) => sum + (current.usageCount ? 1 : 0), 0),
    uniqueId,
  ];
}

module.exports = {
  findOverlaps,
};
