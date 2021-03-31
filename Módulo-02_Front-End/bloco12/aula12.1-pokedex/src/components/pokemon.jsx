import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, image, moreInfo } = this.props.pokemon;
    const { value, measurementUnit } = this.props.pokemon.averageWeight;
    return (
      <div className='pokemon-info'>
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>
            Peso: {value} {measurementUnit}
          </p>
          <p>
            Para mais informações acesse:
            <a href={moreInfo}> aqui</a>
          </p>
        </div>
        <img src={image} alt="pokemon" />
      </div>
    );
  }
}

export default Pokemon;
