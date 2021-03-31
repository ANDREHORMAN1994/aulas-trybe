import React from 'react';
import InputName from './inputName';
import InputEmail from './inputEmail';
import InputCPF from './inputCPF';
import InputAdress from './inputAdress';
import InputCity from './inputCity';
import InputStates from './inputStates';
import RadioButton from './radioButton';
import TextArea from './textArea';
import TextArea2 from './textArea2';
import InputDescription from './inputDescription';
import ButtonClear from './button';

class Forms extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			CPF: '',
			adress: '',
			city: '',
			states: '',
			radio: '',
			textarea: '',
			textarea2: '',
			description: '',
		};
	}

	handleStatesValue = ({ target }) => {
		const { type, name, value, id } = target;
		let newValue = value;
		if (name === 'name') newValue = value.toUpperCase();
		if (type === 'radio') newValue = id;

		this.setState({
			[name]: newValue,
		});
	};

	render() {
		return (
			<form action=''>
				<fieldset>
					<legend>Dados Pessoais</legend>
					<InputName value={this.state.name} target={this.handleStatesValue} />
					<InputEmail
						value={this.state.email}
						target={this.handleStatesValue}
					/>
					<InputCPF value={this.state.CPF} target={this.handleStatesValue} />
					<InputAdress
						value={this.state.adress}
						target={this.handleStatesValue}
					/>
					<InputCity value={this.state.city} target={this.handleStatesValue} />
					<InputStates
						value={this.state.states}
						target={this.handleStatesValue}
					/>
					<RadioButton
						value={this.state.radio}
						target={this.handleStatesValue}
					/>
				</fieldset>
				<fieldset>
					<legend>Trabalhos Pessoais</legend>
					<TextArea
						value={this.state.textArea}
						target={this.handleStatesValue}
					/>
					<TextArea2
						value={this.state.textArea2}
						target={this.handleStatesValue}
					/>
					<InputDescription
						value={this.state.description}
						target={this.handleStatesValue}
					/>
				</fieldset>
				<ButtonClear
					name={this.state.name}
					email={this.state.email}
					CPF={this.state.CPF}
					adress={this.state.adress}
					city={this.state.city}
					states={this.state.states}
					radio={this.state.radio}
					textarea={this.state.textarea}
					textarea2={this.state.textarea2}
					description={this.state.description}
				/>
			</form>
		);
	}
}

export default Forms;
