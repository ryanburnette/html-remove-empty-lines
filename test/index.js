'use strict';

var { readFile } = require('fs').promises;
var removeEmptyLines = require('../index.js');

Promise.all([
  readFile('./test/before.html', 'utf8'),
  readFile('./test/after.html', 'utf8')
])
  .then(function ([before, after]) {
    return Promise.all([before, after, removeEmptyLines(before)]);
  })
  .then(function ([before, after, actual]) {
    //console.log(after);
    //console.log(actual);
    if (after.split('\n').length != actual.split('\n').length) {
      console.log('fail');
      process.exit(1);
    }
    console.log('pass');
  });
