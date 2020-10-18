'use strict';

function htmlRemoveEmptyLines(htmlDocString) {
  var inPre = false;
  var inCode = false;
  var newLines = htmlDocString.split('\n').filter(function (line) {
    if (line.includes('<pre')) {
      inPre = true;
    }
    if (line.includes('</pre')) {
      inPre = false;
    }
    if (line.includes('<code')) {
      inCode = true;
    }
    if (line.includes('</code')) {
      inCode = false;
    }
    return inPre || inCode || line.length;
  });
  return newLines.join('\n');
}

module.exports = htmlRemoveEmptyLines;
