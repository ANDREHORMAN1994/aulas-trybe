// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const handleNumber = string => {
	const array = [...string];
  let newArray = [];
  let newArray2 = [];
	array.forEach(number => {
    if (number !== 0) newArray.push(number);
    if (number === '-') newArray2.push(number);
  });
  let newNumber = parseInt(newArray2.join('') + newArray.join(''));
	return newNumber;
};
// console.log(handleNumber(reverseInt(-90)));

function reverseInt(n) {
	const array = n.toString();
	let newNumber = '';
	for (let i = array.length - 1; i >= 0; i -= 1) {
		newNumber += array[i];
	}
	return handleNumber(newNumber);
}
console.log(reverseInt(500))

module.exports = reverseInt;
