import React, { Component } from 'react';
import './App.css';

const array = [
	'Aprender React;',
	'Aprender Componentes;',
	'Desenvolver meus projetos;',
	'Dominar o mundo!!!',
];
const CreateLi = prop => <li>{prop.value}</li>;
const CreateUl = () => (
	<ul>
		{array.map((item, index) => (
			<CreateLi key={index} value={item} />
		))}
	</ul>
);

class NewComponent extends Component {
	render() {
		return (
			<div className='App'>
				<h1>HELLO WORLD</h1>
				<p>BLOCO 11.1 - Primeiros Passos no React</p>
				<hr />
				<CreateUl />
			</div>
		);
	}
}

export default NewComponent;
