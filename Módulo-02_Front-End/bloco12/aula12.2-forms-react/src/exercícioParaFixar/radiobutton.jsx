import React from 'react';

class RadioButton extends React.Component {
	render() {
		const { otaku, updateStates } = this.props;
		return (
			<div>
				<span>Você é Otaku ?</span>
				<label htmlFor='sim'>Sim</label>
				<input
					type='radio'
					name='otaku'
					id='sim'
					value={otaku}
					onChange={updateStates}
				/>
				<label htmlFor='não'>Não</label>
				<input
					type='radio'
					name='otaku'
					id='não'
					value={otaku}
					onChange={updateStates}
				/>
			</div>
		);
	}
}

export default RadioButton;
