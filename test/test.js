import assert from 'assert';
import EmojiCharString from '../src/EmojiCharString';

// constructor
describe('EmojiCharString Class constructor', () => {
	it('Throws an error if wrong arguments are specified.', () => {
	    assert.throws(() => new EmojiCharString(), Error);
	    assert.throws(() => new EmojiCharString({}), Error);
	    assert.throws(() => new EmojiCharString([]), Error);
	    assert.throws(() => new EmojiCharString(234), Error);
	})
});

// length
describe('EmojiCharString Class length property', () => {
    it('Get empty string length correctly!', () => {
        assert.equal((new EmojiCharString('')).length, 0);
    });

    it('Get emoji string length correctly!', () => {
        assert.equal((new EmojiCharString('1️⃣')).length, 1);
    });
});

// substring
describe('EmojiCharString Class substring method', () => {
	let str = '👨‍👨‍👦 our family 我们一家 ❤️',
		emojiStr = new EmojiCharString(str),
		emojiStrLen = emojiStr.length;

	it('If begin equals end, return an empty string.', () => {
		assert.equal(emojiStr.substring(0, 0), '');
		assert.equal(emojiStr.substring(5, 5), '');
		assert.equal(emojiStr.substring(emojiStrLen, emojiStrLen), '');
	});

	it('If end is omitted, return extracts characters to the end of the string.', () => {
		assert.equal(emojiStr.substring('abc'), str);
		assert.equal(emojiStr.substring(0), str);
		assert.equal(emojiStr.substring(4), 'r family 我们一家 ❤️')
		assert.equal(emojiStr.substring(emojiStrLen), '');
	});

	it('If either argument is less than 0 or is NaN, it is treated as if it were 0.', () => {
		assert.equal(emojiStr.substring(-1, emojiStrLen), str);
		assert.equal(emojiStr.substring(-1, 1), '👨‍👨‍👦');
		assert.equal(emojiStr.substring(NaN, emojiStrLen), str);
		// equal -> emojiStr.substring(0, 5)
		assert.equal(emojiStr.substring(5, NaN), '👨‍👨‍👦 our');
	});

	it('If either argument is greater than string length, it is treated as if it were string length.', () => {
		assert.equal(emojiStr.substring(0, 100), str);
		// equal -> emojiStr.substring(emojiStrLen, emojiStrLen)
		assert.equal(emojiStr.substring(100, 200), '');
	});

	it('If begin is greater than end, then the effect of substring() is as if the two arguments were swapped.', () => {
		// for example, str.substring(1, 0) == str.substring(0, 1).
		assert.equal(emojiStr.substring(100, 0), str);
		assert.equal(emojiStr.substring(-100, -500), '');
		assert.equal(emojiStr.substring(5, 0), '👨‍👨‍👦 our')
	});
});

// reverse
describe('EmojiCharString Class reverse method', () => {
	it('Reverse string without emoji correctly.', () => {
		let emojiStr = new EmojiCharString('hello world');
		assert.equal(emojiStr.reverse(), "dlrow olleh");
	});
	it('Reverse string with emoji correctly.', () => {
		let emojiStr = new EmojiCharString('👨‍👨‍👦 our family 我们一家 ❤️👏');
		assert.equal(emojiStr.reverse(), "👏❤️ 家一们我 ylimaf ruo 👨‍👨‍👦");
	});
	it('Reverse empty string correctly.', () => {
		let emojiStr = new EmojiCharString('');
		assert.equal(emojiStr.reverse(), '');
	});
});

