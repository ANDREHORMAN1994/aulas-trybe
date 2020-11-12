import React from 'react';
import InputText from './inputText';
import InputDate from './inputDate';
import TextArea from './textArea';
import CheckBox from './checkbox';
import RadioButton from './radiobutton';
import Select from './select';
import InputFile from './inputFile';

class Forms extends React.Component {
	constructor(props) {
		super(props);

		this.updateStates = this.updateStates.bind(this);

		this.state = {
			animes: '',
			name: '',
			age: '',
			history: '',
			otaku: '',
			watch: false,
			foto: '',
		};
	}

	updateStates({ target }) {
		const { type, name, id, value, checked, files } = target;
		let newValue = value;
		if (type === 'checkbox') newValue = checked;
		if (type === 'radio') newValue = id;
		// console.log(files['0'])
		if (type === 'file') newValue = files['0'];

		this.setState({
			[name]: newValue,
		});
	}

	render() {
		return (
			<div>
				<form action=''>
					<fieldset>
						<fieldset>
							<legend>Perfil do Usuário</legend>
							<InputText
								name={this.state.name}
								updateStates={this.updateStates}
							/>
							<InputDate
								age={this.state.age}
								updateStates={this.updateStates}
							/>
							<TextArea
								history={this.state.history}
								updateStates={this.updateStates}
							/>
						</fieldset>
						<fieldset>
							<legend>Gostos pessoais</legend>
							<CheckBox
								watch={this.state.watch}
								updateStates={this.updateStates}
							/>
							<RadioButton
								otaku={this.state.otaku}
								updateStates={this.updateStates}
							/>
							<Select
								animes={this.state.animes}
								updateStates={this.updateStates}
							/>
							<InputFile
								foto={this.state.foto}
								updateStates={this.updateStates}
							/>
						</fieldset>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default Forms;
