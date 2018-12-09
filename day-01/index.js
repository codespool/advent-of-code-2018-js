const data = require('../lib/dataLoader')(`${__dirname}/data.txt`);

const {
  calculateFreq,
  getIntArray,
  findFirstDuplicate,
} = require('./calculateFreq');

const intArray = getIntArray(data);
console.log(calculateFreq(intArray));
console.log(findFirstDuplicate(intArray));
