'use strict';

var fs = require('fs');

function htmlRemoveEmptyLines(str) {
  var pre = false;
  var code = false;
  var mod = [];
  var lines = str.split('\n');
  lines.forEach(function (line) {
    if (line.includes('<pre')) {
      pre = true;
    }
    if (line.includes('</pre')) {
      pre = false;
    }
    if (line.includes('<code')) {
      code = true;
    }
    if (line.includes('</code')) {
      code = false;
    }
    if (pre || code) {
      mod.push(line);
    } else if (line.length) {
      mod.push(line);
    }
  });
  return mod.join('\n');
}

if (require.main === module) {
  return fs.promises.readFile(process.argv[2], 'utf8').then(function (str) {
    console.log(htmlRemoveEmptyLines(str));
  });
} else {
  module.exports = { htmlRemoveEmptyLines };
}
