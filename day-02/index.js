const data = require('../lib/dataLoader')(`${__dirname}/data.txt`);

const { findChecksum, findCommonLetters } = require('./findChecksum');

const stringsArray = data.split('\n');
console.log(findCommonLetters(stringsArray));
console.log(findChecksum(stringsArray));
