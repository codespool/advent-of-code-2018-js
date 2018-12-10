const data = require('../lib/dataLoader')(`${__dirname}/data.txt`);

const { findChecksum } = require('./findChecksum');

const stringsArray = data.split('\n');
console.log(findChecksum(stringsArray));
