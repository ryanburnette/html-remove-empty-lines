# [html-remove-empty-lines](https://github.com/ryanburnette/html-remove-empty-lines)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/html-remove-empty-lines)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/html-remove-empty-lines)

Remove empty lines from an HTML file without messing up `<pre>`.

## Install

```bash
npm install -g @ryanburnette/html-remove-empty-lines
```

## Command Line

```bash
html-remove-empty-lines html/
```

## Module

```js
var htmlRemoveEmptyLines = require('@ryanburnette/html-remove-empty-lines');
console.log(htmlRemoveEmptyLines('<html>\n\n</html>'));
```
