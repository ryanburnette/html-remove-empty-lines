'use strict';

var fs = require('fs');

var before = fs.readFileSync('before.html', 'utf8');
var after = fs.readFileSync('after.html', 'utf8');

var removeEmptyLines = require('../index.js');

removeEmptyLines('before.html').then(function (str) {
  console.log(str);
  console.log(after);
});
