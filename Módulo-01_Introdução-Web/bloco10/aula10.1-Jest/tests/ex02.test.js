const myRemove = require('../ex02');
// console.log(myRemove([1, 2, 3, 4, 5, 6, 7], 2))

describe('myRemove results', () => {
	test('the array expected is the same', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
	test('the result is not the expected', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});
});
