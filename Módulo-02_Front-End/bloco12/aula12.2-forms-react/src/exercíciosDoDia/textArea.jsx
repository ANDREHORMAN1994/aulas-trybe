import React from 'react';

class TextArea extends React.Component {
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='textarea'>Resumo do currículo</label>
				<textarea
					name='textarea'
					id='textarea'
					maxLength='1000'
					value={value}
					onChange={target}
					required></textarea>
			</div>
		);
	}
}

export default TextArea;
