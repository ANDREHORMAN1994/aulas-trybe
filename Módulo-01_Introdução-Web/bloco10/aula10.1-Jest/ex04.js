// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

const numberDivisible1 = (num, numDiv, messageTrue, messageFalse) => {
	return num % numDiv === 0 ? messageTrue : messageFalse;
};

const numberDivisible2 = (num, numDiv1, numDiv2, messageTrue, messageFalse) => {
	return num % numDiv1 === 0 && num % numDiv2 === 0
		? messageTrue
		: messageFalse;
};

const myFizzBuzz = num => {
	if (typeof num !== 'number') return false;
	let value = num;
	if (num % 3 === 0 || num % 5 === 0) {
		value = numberDivisible1(num, 3, 'fizz', 'buzz');
	}
	value = numberDivisible2(num, 3, 5, 'fizzbuzz', value);
	return value;
};

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }


// console.log(myFizzBuzz(1));
// console.log(9 % 3 === 0)
module.exports = myFizzBuzz;
