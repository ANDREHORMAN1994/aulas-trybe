import React from 'react';

class InputText extends React.Component {
	constructor(props) {
		super(props);
		this.validationName = this.validationName.bind(this);
	}

	validationName(name) {
		let message = '';
		let array = ['&', '@', '*', '%', '!', '?'];
		array.forEach(element => {
			if (name.includes(element)) {
				message = 'Nome possui caracteres inválidos';
			}
		});
		return message;
	}

	render() {
		const { name, updateStates } = this.props;
		return (
			<div>
				<label htmlFor='name'> Coloque seu nome aqui:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={updateStates}
					error={true}
				/>
				<p>{this.validationName(name)}</p>
			</div>
		);
	}
}

export default InputText;
