// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reverseWord = word => {
	const array = [...word];
	let newArray = [];
	for (let i = array.length - 1; i >= 0; i -= 1) {
		newArray.push(array[i]);
	}
	return newArray.join('');
};
// console.log(reverseWord('abba'));

function palindrome(str) {
	return str === reverseWord(str) ? true : false;
}
// console.log(palindrome('abba'));

module.exports = palindrome;
