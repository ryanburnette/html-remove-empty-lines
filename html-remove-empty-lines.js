'use strict';

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

module.exports = { htmlRemoveEmptyLines };
