# strip-stars

[![GratiPay](https://img.shields.io/gratipay/user/alexgorbatchev.svg)](https://gratipay.com/alexgorbatchev/)
![Downloads](https://img.shields.io/npm/dm/strip-stars.svg)
![Version](https://img.shields.io/npm/v/strip-stars.svg)

Removes C-style comment stars from every line of the string.

## Installation

```
npm install --save-dev strip-stars
```

## Usage

```
import stripStars from 'strip-stars';

stripStars(`
 * This is a description.
 *
 * ## Example
 *
 * ```js
 * function hello() {
 *   console.log('Hi!');
 * }
 * ```
`);

// This is a description.
//
// ## Example
//
// ```js
// function hello() {
//   console.log('Hi!');
// }
// ```
```

## License

ISC
