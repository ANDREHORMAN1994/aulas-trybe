// A função sum(a, b) retorna a soma do parâmetro a com o b

const sum = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		// return 'ERROR';
		throw new Error('parameters must be numbers');
	}
	return a + b;
};
// console.log(sum(10, '5'));

module.exports = sum;
