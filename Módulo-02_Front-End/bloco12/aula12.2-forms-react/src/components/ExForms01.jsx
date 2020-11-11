import React from 'react';

class Forms01 extends React.Component {
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
		const { name, value, type, checked, id, files } = target;
		let newValue = type === 'checkbox' ? checked : value;
		if (type === 'radio') newValue = id;
		console.log(files)
		// if (type === 'file') newValue = files;

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
							<div>
								<label htmlFor='name'> Coloque seu nome aqui:</label>
								<input
									type='text'
									name='name'
									id='name'
									value={this.state.name}
									onChange={this.updateStates}
								/>
							</div>
							<div>
								<label htmlFor='age'> Coloque sua idade aqui:</label>
								<input
									type='text'
									name='age'
									id='age'
									value={this.state.age}
									onChange={this.updateStates}
								/>
							</div>
							<div>
								<label htmlFor='history'> Escreva sua história aqui:</label>
								<textarea
									name='history'
									id='history'
									cols='30'
									rows='1'
									value={this.state.history}
									onChange={this.updateStates}></textarea>
							</div>
						</fieldset>
						<fieldset>
							<legend>Gostos pessoais</legend>
							<div>
								<label htmlFor='watchAnimes'>Já assistiu Animes antes ?</label>
								<input
									type='checkbox'
									name='watch'
									id='watchAnimes'
									value={this.state.watch}
									onChange={this.updateStates}
								/>
							</div>
							<div>
								<span>Você é Otaku ?</span>
								<label htmlFor='sim'>Sim</label>
								<input
									type='radio'
									name='otaku'
									id='sim'
									value={this.state.otaku}
									onChange={this.updateStates}
								/>
								<label htmlFor='não'>Não</label>
								<input
									type='radio'
									name='otaku'
									id='não'
									value={this.state.otaku}
									onChange={this.updateStates}
								/>
							</div>
							<div>
								<label htmlFor='animes'> ESCOLHA SEU ANIME PREFERIDO</label>
								<select
									name='animes'
									id='animes'
									value={this.state.animes}
									onChange={this.updateStates}>
									<option value='nenhum' selected>Selecione seu Anime</option>
									<option value='DBZ'>Dragon Ball</option>
									<option value='CDZ'>Cavaleiros do Zodíaco</option>
									<option value='Naruto'>Naruto</option>
									<option value='One Piece'>One Piece</option>
								</select>
							</div>
							<div>
								<label htmlFor='foto'>Escolha uma imagem</label>
								<input
									type='file'
									id='foto'
									name='foto'
									value={this.state.foto}
									onChange={this.updateStates}
								/>
							</div>
						</fieldset>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default Forms01;
