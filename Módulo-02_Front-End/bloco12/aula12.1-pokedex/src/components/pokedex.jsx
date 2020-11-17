import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.nextPokemon = this.nextPokemon.bind(this);
    this.nextCount = this.nextCount.bind(this);
    this.resetCount = this.resetCount.bind(this);

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

  resetCount() {
    const { pokemonList } = this.props;

    if (this.state.count === pokemonList.length - 1) {
      this.setState({
        count: 0,
      });
    }
  }

  nextCount() {
    const { pokemonList } = this.props;

    this.setState(
      (previousElement) => ({
        count: previousElement.count + 1,
      }),
      () => {
        this.nextPokemon();
        this.resetCount();
        console.log(this.state.count);
        console.log(pokemonList[this.state.count].id);
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
