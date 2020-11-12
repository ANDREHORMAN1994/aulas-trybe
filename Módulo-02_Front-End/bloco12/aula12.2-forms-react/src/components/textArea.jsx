import React from 'react';

class TextArea extends React.Component {
	constructor(props) {
		super(props);
		this.validationTextArea = this.validationTextArea.bind(this);
	}

	validationTextArea(value) {
		let message;
		value.length > 30 ? (message = 'Messagem muito grande') : (message = '');
		return message;
	}

	render() {
		const { history, updateStates } = this.props;
		return (
			<div>
				<label htmlFor='history'> Escreva sua história aqui:</label>
				<textarea
					name='history'
					id='history'
					cols='30'
					rows='1'
					value={history}
					onChange={updateStates}></textarea>
				<p>{this.validationTextArea(history)}</p>
			</div>
		);
	}
}

export default TextArea;
