const fs = require('fs');

const { calculateFreq, getIntArray } = require('./calculateFreq');

const rawData = fs.readFileSync(`${__dirname}/data.txt`, {
  encoding: 'utf-8',
});
console.log(calculateFreq(getIntArray(rawData)));
