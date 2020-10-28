// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const myRemove = (arr, item) => {
	const newArray = [];
	arr.forEach(number => {
		item !== number ? newArray.push(number) : false;
	});
	return newArray;
};
// console.log(myRemove([1, 2, 3, 4, 5, 6, 7], 2))

module.exports = myRemove;
