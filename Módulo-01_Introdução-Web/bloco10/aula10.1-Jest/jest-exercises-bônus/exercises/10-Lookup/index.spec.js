// Data
const users = [
	{
		login: 'knuth',
		firstName: 'Donald',
		lastName: 'Knuth',
		likes: ['C', 'Unix'],
	},
	{
		login: 'norvig',
		firstName: 'Peter',
		lastName: 'Norvig',
		likes: ['AI', 'Search', 'NASA', 'Mars'],
	},
	{
		login: 'mfowler',
		firstName: 'Martin',
		lastName: 'Fowler',
		likes: ['Design Patterns', 'Refactoring'],
	},
	{
		login: 'kent',
		firstName: 'Kent',
		lastName: 'Beck',
		likes: ['TDD', 'wikis', 'Design Patterns'],
	},
];

// const chekError = (login, property) => {
// 	users.forEach(user => {
// 		if (user.login !== login) throw new Error('Could not find user');
// 		if (!user[property]) throw new Error('Could not find property');
// 	});
// };

const lookup = (login, property) => {
	const userProperity = users.find(user => user.login === login);
	if (!userProperity) throw new Error('Could not find user');
	if (!userProperity[property]) throw new Error('Could not find property');
	return userProperity[property];
};

// console.log(lookup('norvig', 'likes'));

// Tests
describe('lookup()', () => {
	it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
		const actual = lookup('norvig', 'likes');
		const expected = ['AI', 'Search', 'NASA', 'Mars'];

		expect(actual).toEqual(expected);
	});
	it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
		const actual = lookup('knuth', 'lastName');
		const expected = 'Knuth';

		expect(actual).toEqual(expected);
	});
	it('with unknown user should throw an error with the correct message', () => {
		expect(() => {
			lookup('nobody', 'likes');
		}).toThrow(/Could not find user/);
	});
	  it('with unknown property should throw an error the correct message', () => {
	    expect(() => {
	      lookup('mfowler', 'noprop');
	    }).toThrow(/Could not find property/);
	  });
});
