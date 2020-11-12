import React from 'react';

class inputDescription extends React.Component {
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='description'>Descrição do Cargo</label>
				<input
					name='description'
					id='description'
					maxLength='500'
					value={value}
					onChange={target}
					required />
			</div>
		);
	}
}

export default inputDescription;
