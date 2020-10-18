# [html-remove-empty-lines](https://github.com/ryanburnette/html-remove-empty-lines)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/html-remove-empty-lines)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/html-remove-empty-lines)

Remove empty lines from dist HTML.

## Features

- removes empty lines from dist (built) html
- does not damage formatting within `<pre>` tags
- **WARNING** updates files in place

## CLI

```bash
npm install -g @ryanburnette/html-remove-empty-lines
html-remove-empty-lines public/
```

## CLI (npx)

```bash
npm install --save @ryanburnette/html-remove-empty-lines
npx html-remove-empty-lines public/
```

## Js

```js
var htmlRemoveEmptyLines = require('@ryanburnette/html-remove-empty-lines');

console.log(htmlRemoveEmptyLines('<html>\n\n</html>'));
```

## Example
