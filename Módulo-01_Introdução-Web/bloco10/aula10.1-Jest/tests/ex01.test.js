const sum = require('../ex01');

describe('the sum results', () => {
	test('expect sum return a + b', () => {
		expect(sum(4, 5)).toBe(9);
		expect(sum(0, 0)).toBe(0);
	});

	test('expect sum return a error', () => {
		expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
	});
});
