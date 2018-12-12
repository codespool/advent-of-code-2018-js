const data = require('../lib/dataLoader')(`${__dirname}/data.txt`);

const { findOverlaps } = require('./findOverlaps');

const stringsArray = data.split('\n');
console.log(findOverlaps(stringsArray));
