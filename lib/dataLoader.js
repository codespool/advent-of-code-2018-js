const fs = require('fs');

module.exports = function dataLoader(filePath) {
  return fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
};
