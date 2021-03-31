// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const printNumbers = number => {
	let value = number;
	if (number % 3 === 0) value = 'fizz';
	if (number % 5 === 0) value = 'buzz';
	if (number % 3 === 0 && number % 5 === 0) value = 'fizzbuzz';
	return value;
};
// console.log(printNumbers(5));

function fizzBuzz(n) {
	for (let i = 1; i <= n; i += 1) {
		console.log(printNumbers(i));
	}
}
fizzBuzz(15);

module.exports = fizzBuzz;
