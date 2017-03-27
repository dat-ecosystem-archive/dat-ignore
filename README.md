# dat-ignore

> default ignore for dat

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/dat-ignore.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dat-ignore
[travis-image]: https://img.shields.io/travis/joehand/dat-ignore.svg?style=flat-square
[travis-url]: https://travis-ci.org/joehand/dat-ignore
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install dat-ignore
```

## Usage

```js
var datIgnore = require('dat-ignore')
var ignore = datIgnore('/data/dir')

console.log(ignore('.dat')) // true
console.log(ignore('.git')) // true
console.log(ignore('dat-data')) // false
console.log(ignore('cat.jpg')) // false
```

## License

[MIT](LICENSE.md)
