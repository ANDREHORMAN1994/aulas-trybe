import Image from './pokemonImage';
import React from 'react';

class List extends React.Component {
	render() {
    const { name, type, image, id } = this.props.pokemon;
    const { value, measurementUnit } = this.props.pokemon.averageWeight
		return (
			<div className='pokemon-container' key={id}>
				<div className='info-container'>
					<li> Nome: <strong>{name}</strong>; </li> 
					<li> Tipo: <strong>{type}</strong>; </li>
					<li>  Peso: <strong>{value} {measurementUnit}</strong>; </li>
				</div>
				<Image src={image} />
			</div>
		);
	}
}

export default List;
