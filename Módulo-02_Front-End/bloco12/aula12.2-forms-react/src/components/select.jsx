import React from 'react';

class Select extends React.Component {
	render() {
		const { animes, updateStates } = this.props;
		return (
			<div>
				<label htmlFor='animes'> ESCOLHA SEU ANIME PREFERIDO</label>
				<select
					name='animes'
					id='animes'
					value={animes}
					onChange={updateStates}>
					<option value='nenhum'>Selecione seu Anime</option>
					<option value='DBZ'>Dragon Ball</option>
					<option value='CDZ'>Cavaleiros do Zodíaco</option>
					<option value='Naruto'>Naruto</option>
					<option value='One Piece'>One Piece</option>
				</select>
			</div>
		);
	}
}

export default Select;
