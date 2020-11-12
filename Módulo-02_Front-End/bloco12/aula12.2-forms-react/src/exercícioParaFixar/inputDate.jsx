import React from 'react';

class InputDate extends React.Component {
	constructor(props) {
		super(props);
		this.newDate = this.newDate.bind(this);
	}

	newDate(date) {
		const arrayDate = date.split('-');
		let newDate = '';
		for (let i = arrayDate.length - 1; i >= 0; i -= 1) {
			// console.log(arrayDate[i])
			i === 0
				? (newDate += `${arrayDate[i]}`)
				: (newDate += `${arrayDate[i]}/`);
		}
		return newDate;
	}

	render() {
		const { age, updateStates } = this.props;
		return (
			<div>
				<label htmlFor='age'> Coloque sua idade aqui:</label>
				<input
					type='date'
					name='age'
					id='age'
					value={age}
					onChange={updateStates}
				/>
				<p>{this.newDate(age)}</p>
			</div>
		);
	}
}

export default InputDate;
