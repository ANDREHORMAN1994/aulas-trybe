import React from 'react';

class TextArea2 extends React.Component {
	render() {
		const { value, target } = this.props;
		let count = 0;
		return (
			<div>
				<label htmlFor='textarea'>Resumo do Cargo</label>
				<textarea
					name='textarea2'
					id='textarea'
					maxLength='40'
					value={value}
					onChange={target}
					onMouseEnter={() => {
						if (count === 0) {
							alert('Preencha com cuidado esta informação');
							count += 1;
						}
					}}
					required></textarea>
			</div>
		);
	}
}

export default TextArea2;
