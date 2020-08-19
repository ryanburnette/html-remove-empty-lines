#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var walk = require('walk');
var htmlRemoveEmptyLines = require('../lib/html-remove-empty-lines');

console.log('starting');

var walker = walk.walk(process.argv[2], {});

walker.on('file', function (root, stat, next) {
  var filepath = path.join(root, stat.name);
  if (stat.name.endsWith('.html')) {
    fs.promises
      .readFile(filepath, 'utf8')
      .then(function (htmlDocString) {
        return fs.promises.writeFile(
          filepath,
          htmlRemoveEmptyLines(htmlDocString)
        );
      })
      .then(function () {
        console.log('wrote', filepath);
        next();
      });
  } else {
    next();
  }
});

walker.on('end', function () {
  console.log('complete');
});
