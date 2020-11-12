import React from 'react';

class InputEmail extends React.Component {
  validationEmail = (email) => {
    let message = '';
    if (email.includes(' ')) message = 'email não pode conter espaços';
    return message;
  }
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='email'>Escreva seu E-mail</label>
				<input
					type='email'
					name='email'
					id='email'
          maxLength='50'
          onChange={target}
          value={value}
					required
				/>
				<p>{this.validationEmail(value)}</p>
			</div>
		);
	}
}

export default InputEmail;
