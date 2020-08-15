'use strict';

var fs = require('fs');
var { htmlRemoveEmptyLines } = require('./html-remove-empty-lines');

return fs.promises.readFile(process.argv[2], 'utf8').then(function (str) {
  console.log(htmlRemoveEmptyLines(str));
});
