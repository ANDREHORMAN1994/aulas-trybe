import React from 'react';

class InputFile extends React.Component {
	render() {
		const { foto, updateStates } = this.props;
		return (
			<div>
				<label htmlFor='foto'>Escolha uma imagem</label>
				<input
					type='file'
					id='foto'
					name='foto'
					files={foto}
					onChange={updateStates}
				/>
			</div>
		);
	}
}

export default InputFile;
