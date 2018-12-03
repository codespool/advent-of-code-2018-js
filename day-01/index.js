const fs = require('fs');

const {
  calculateFreq,
  getIntArray,
  findFirstDuplicate,
} = require('./calculateFreq');

const rawData = fs.readFileSync(`${__dirname}/data.txt`, {
  encoding: 'utf-8',
});
const intArray = getIntArray(rawData);
console.log(calculateFreq(intArray));
console.log(findFirstDuplicate(intArray));
