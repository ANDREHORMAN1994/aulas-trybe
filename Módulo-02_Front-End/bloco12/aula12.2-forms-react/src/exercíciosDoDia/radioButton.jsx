import React from 'react';

class RadioButton extends React.Component {
	render() {
		const { value, target } = this.props;
		return (
			<div>
        <p>Escolha sua Residência</p>
				<label htmlFor='Casa'>Casa</label>
				<input
					type='radio'
					name='radio'
					id='Casa'
					onChange={target}
					value={value}
					required
				/>
        <label htmlFor='Apartamento'>Apartamento</label>
				<input
					type='radio'
					name='radio'
					id='Apartamento'
					onChange={target}
					value={value}
					required
				/>
			</div>
		);
	}
}

export default RadioButton;
