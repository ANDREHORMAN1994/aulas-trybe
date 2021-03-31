import React from 'react';

class InputStates extends React.Component {
	render() {
		const { value, target } = this.props;
		const allStates = [
			'Selecione um estado',
			'Rio de Janeiro',
			'Minas Gerais',
			'Amapá',
			'Amazonas',
			'São Paulo',
			'Ceará',
			'Distrito Federal',
		];
		return (
			<div>
				<label htmlFor='states'>Selecione seu Estado</label>
				<select
					name='states'
					id='states'
					onChange={target}
					value={value}
					required>
					{allStates.map((state, index) => (
						<option value={state} key={index}>
							{state}
						</option>
					))}
				</select>
			</div>
		);
	}
}

export default InputStates;
