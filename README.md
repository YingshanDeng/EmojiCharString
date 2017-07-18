# EmojiCharString

[![npm version](https://badge.fury.io/js/emojicharstring.svg)](https://badge.fury.io/js/emojicharstring)
[![Build Status](https://travis-ci.org/YingshanDeng/EmojiCharString.svg?branch=master)](https://travis-ci.org/YingshanDeng/EmojiCharString)
[![Coverage Status](https://coveralls.io/repos/github/YingshanDeng/EmojiCharString/badge.svg?branch=master)](https://coveralls.io/github/YingshanDeng/EmojiCharString?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

When the string contains emoji, we use `String.prototype.length` cannot get the characters count correctly! Such as:
- `'👦🏿'.length` return 4, it should be 1!
- `'👨‍👩‍👦'.length` return 8, it alse should be 1!

EmojiCharString is based on a RegExp to work with JavaScript String's unicode problem. It can solve the problem above.

❗️Note that it is not for good performance but for accuracy, because it uses a complex RegExp to analyze the string.

## Install
Using NPM, install EmojiCharString, and add it to your `package.json` dependencies.
```bash
npm install emojicharstring --save
```

And then you can import it
```javascript
// CommonJS
const EmojiCharString = require('EmojiCharString');

// or ES6
import EmojiCharString from 'EmojiCharString'
```

Or include the file in your HTML page using the following tags:
```javascript
<script src="/path/to/dist/EmojiCharString.min.js"></script>
```

## Usage

### initialise EmojiCharString
```javascript
var emojiStr = new EmojiCharString('👦🏿')
```

### `length`
Get the string's length correctly.
```javascript
var emojiStr = new EmojiCharString('👦🏿')
var len = emojiStr.length // 1
```

### `reverse ()`
Reverse the string in place.
```javascript
var emojiStr = new EmojiCharString('👦🏿👨‍👩‍👦')
console.log(emojiStr.reverse()) // '👨‍👩‍👦👦🏿'
```

### `substring (begin = 0, end)`
The substring() method returns a subset of a string between begin index and end index

| Param | Type | Default | Description |
|---|---|---|---|
| begin | <code>Number</code> | *0* | begin index |
| end | <code>Number</code> | *none* | end index |

```javascript
var emojiStr = new EmojiCharString('👨‍👨‍👦 our family 我们一家 ❤️')
console.log(emojiStr.substring(2, 5)) // 'our'
```

### `substr (begin = 0, len)`
The substr() method return the characters in a string beginning at the specified location through the specified number of characters.

| Param | Type | Default | Description |
|---|---|---|---|
| begin | <code>Number</code> | *0* | Location at which to begin extracting characters |
| len | <code>Number</code> | *none* | The number of characters to extract |

```javascript
var emojiStr = new EmojiCharString('👨‍👨‍👦 our family 我们一家 ❤️')
console.log(emojiStr.substr(2, 5)) // 'our f'
```

## License
MIT