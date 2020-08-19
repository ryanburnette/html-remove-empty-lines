'use strict';

function htmlRemoveEmptyLines(htmlDocString) {
  var inPre = false;
  var inCode = false;
  return htmlDocString
    .split('\n')
    .filter(function (line) {
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
    })
    .join('\n');
}

module.exports = htmlRemoveEmptyLines;
