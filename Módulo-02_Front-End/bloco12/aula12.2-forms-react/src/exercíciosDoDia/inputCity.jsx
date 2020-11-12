import React from 'react';

class InputCity extends React.Component {
	validationcity = city => {
		let message = '';
		const array = city.split('');
		array.forEach(element => {
			if (parseInt(element)) message = 'Cidade não pode conter números';
		});
		return message;
	};
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='city'>Escreva sua Cidade</label>
				<input
					type='text'
					name='city'
					id='city'
					maxLength='28'
					onChange={target}
					value={value}
					required
				/>
				<p>{this.validationcity(value)}</p>
			</div>
		);
	}
}

export default InputCity;
