import List from './pokemonList';
import Data from './data';
import React from 'react';
import './App.css';

class Pokemon extends React.Component {
	render() {
		return (
			<div className='App'>
				<h1>POKEDEX</h1>
				<ul className='ul-container'>
					{Data.map(pokemon => {
						return <List pokemon={pokemon} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Pokemon;
