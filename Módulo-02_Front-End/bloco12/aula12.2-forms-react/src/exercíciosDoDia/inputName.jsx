import React from 'react';

class InputText extends React.Component {
  validationName = (name) => {
    let message = '';
    if (name.length > 40) message = 'Nome muito grande';
    return message;
  }
	render() {
		const { value, target } = this.props;
		return (
			<div>
				<label htmlFor='name'>Escreva seu Nome</label>
				<input
					type='text'
					name='name'
					id='name'
          maxLength='40'
          onChange={target}
          value={value}
					required
				/>
				<p>{this.validationName(value)}</p>
			</div>
		);
	}
}

export default InputText;
