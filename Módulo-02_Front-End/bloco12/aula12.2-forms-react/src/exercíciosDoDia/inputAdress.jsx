import React from 'react';

class InputAdress extends React.Component {
	validationadress = adress => {
		let message = '';
		const array = ['@', '!', '#', '$', '%', '&', '*', '(', ')', '?'];
		array.forEach(symbol => {
			if (adress.includes(symbol))
				message = 'Endereço não pode ter caracteres especiais';
		});
		return message;
	};
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='adress'>Escreva seu endereço</label>
				<input
					type='text'
					name='adress'
					id='adress'
					maxLength='200'
					onChange={target}
					value={value}
					required
				/>
				<p>{this.validationadress(value)}</p>
			</div>
		);
	}
}

export default InputAdress;
