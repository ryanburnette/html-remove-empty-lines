# [html-remove-empty-lines](https://github.com/ryanburnette/html-remove-empty-lines)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/html-remove-empty-lines)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/html-remove-empty-lines)

Remove empty lines from HTML.

## Features

- removes empty lines from HTML files
- does not damage formatting within `<pre>` tags
- cli helper takes a directory and runs recursively on all `.html` files
- **WARNING** cli helper updates files in place

## cli

Install globally with npm to use in your local environment.

```bash
npm install -g @ryanburnette/html-remove-empty-lines
```

```bash
html-remove-empty-lines public/
```

## npx

With npx, you can install to your project, but it's not required.

```bash
npm install --save @ryanburnette/html-remove-empty-lines
```

```bash
npx html-remove-empty-lines public/
```

## js

You can also import the `htmlRemoveEmtpyLines` function to utilize it
programmatically.

```js
var htmlRemoveEmptyLines = require('@ryanburnette/html-remove-empty-lines');
console.log(htmlRemoveEmptyLines('<html>\n\n</html>'));
```
