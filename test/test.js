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

// reverse
