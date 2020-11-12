import React from 'react';
import Data from './data';
import List from './pokemonList';
import './App.css';

class Pokemon extends React.Component {
	render() {
		return (
			<div className='App'>
				<h1>POKEDEX</h1>
				<ul className='ul-container'>
					{Data.map((pokemon, index) => {
						return <List pokemon={pokemon} key={index} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Pokemon;
