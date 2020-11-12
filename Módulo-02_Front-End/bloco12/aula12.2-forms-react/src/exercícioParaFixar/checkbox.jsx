import React from 'react';

class CheckBox extends React.Component {
	render() {
		const { watch, updateStates } = this.props;
		return (
			<div>
				<label htmlFor='watchAnimes'>Já assistiu Animes antes ?</label>
				<input
					type='checkbox'
					name='watch'
					id='watchAnimes'
					value={watch}
					onChange={updateStates}
				/>
			</div>
		);
	}
}

export default CheckBox;
