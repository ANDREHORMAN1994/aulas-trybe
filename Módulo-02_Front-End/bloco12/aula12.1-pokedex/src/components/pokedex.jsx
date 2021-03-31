import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.nextPokemon = this.nextPokemon.bind(this);
    this.nextCount = this.nextCount.bind(this);

    const { pokemonList } = this.props;
    this.state = {
      count: 0,
      pokemon: pokemonList[0].id,
    };
  }

  nextPokemon() {
    const { pokemonList } = this.props;

    this.setState({
      pokemon: pokemonList[this.state.count].id,
    });
  }

  nextCount() {
    const { pokemonList } = this.props;

    this.setState(
      (previousElement) => ({
        count:
          previousElement.count >= pokemonList.length - 1
            ? 0
            : previousElement.count + 1,
      }),
      () => {
        this.nextPokemon();
        console.log(this.state.count);
      },
    );
  }

  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => {
            let result;
            if (this.state.pokemon === pokemon.id) {
              result = <Pokemon key={pokemon.id} pokemon={pokemon} />;
            }
            return result;
          })}
        </div>
        <button onClick={this.nextCount}>Próximo Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;
