test('Não deveria passar!', (done) => {
	setTimeout(() => {
		expect(10).toBe(10);
		console.log('Deveria falhar!');
		done();
	}, 500);
});
