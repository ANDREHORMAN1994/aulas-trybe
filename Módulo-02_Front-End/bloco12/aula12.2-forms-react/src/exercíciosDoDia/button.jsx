import React from 'react';
class ButtonClear extends React.Component {
	addInformations = event => {
		const {
			name,
			email,
			CPF,
			adress,
			city,
			states,
			radio,
			textarea,
			textarea2,
			description,
		} = this.props;
		const div = document.querySelector('#content');
		div.innerHTML = `${name}<br/>${email}<br/>${CPF}<br/>${adress}<br/>${city}<br/>${states}<br/>${radio}<br/>${textarea}<br/>${textarea2}<br/>${description}<br/>`;
    event.preventDefault();
	};

	render() {
		return (
			<div>
				<button type='submit' onClick={this.addInformations}>
					Enviar Formulário
				</button>
				<div id='content'></div>
			</div>
		);
	}
}

export default ButtonClear;
