import React from 'react';

class InputCPF extends React.Component {
	validationCPF = CPF => {
		let message = '';
		const arrayCPF = CPF.split('');
		arrayCPF.forEach(number => {
			// console.log(parseInt(number));
			if (!parseInt(number)) message = 'CPF deve conter apenas números';
		});
		return message;
	};
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='CPF'>Escreva seu CPF</label>
				<input
					type='text'
					name='CPF'
					id='CPF'
					maxLength='11'
					onChange={target}
					value={value}
					required
				/>
				<p>{this.validationCPF(value)}</p>
			</div>
		);
	}
}

export default InputCPF;
