
const astralRange = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;
class EmojiCharString {
	constructor(string) {
		if (typeof string != 'string') {
            throw new Error('Input must be a string');
        }
        this._string = string;
		this._match = string.match(astralRange);
	}
	get length() {
		return !!this._match ? this._match.length : 0;
	}

	/**
	 * Reverse the string in place
	 * @return {[String]} [The reversed string]
	 */
	reverse() {
		return this._match.reverse().join('');
	}
}

export default EmojiCharString;
