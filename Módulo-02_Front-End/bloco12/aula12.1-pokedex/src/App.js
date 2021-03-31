import './App.css';
import Pokedex from './components/pokedex';
import Data from './data';

function App() {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <h2>Exercício 12.1</h2>
      <Pokedex pokemonList={Data} />
    </div>
  );
}

export default App;
