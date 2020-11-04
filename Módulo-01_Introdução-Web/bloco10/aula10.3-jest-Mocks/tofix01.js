// Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:

const randomNumber = () => {
	return Math.round(Math.random() * 100);
};
// console.log(randomNumber());

const divisible = number => {
	let valueRandom = randomNumber();
	return valueRandom % number === 0
		? `${valueRandom} / ${number} É DIVISÍVEL`
		: `${valueRandom} / ${number} NÃO É DIVISÍVEL`;
};
// console.log(divisible(randomNumber()));

module.exports = { randomNumber, divisible };
