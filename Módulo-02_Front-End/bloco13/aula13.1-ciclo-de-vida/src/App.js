import React from 'react';
import './App.css';
import Image from './components/photo';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.fetchPhotoDog = this.fetchPhotoDog.bind(this);
    this.loading = this.loading.bind(this);

    this.state = {
      objectDogPhoto: undefined,
    };
  }

  async fetchPhotoDog() {
    const endPoint = 'https://dog.ceo/api/breeds/image/random';
    const fetchPhoto = await fetch(endPoint);
    const object = await fetchPhoto.json();
    console.log(object);

    this.setState({
      objectDogPhoto: object,
    });
  }

  componentDidMount() {
    this.fetchPhotoDog();
  }

  loading() {
    return <p>...LOADING</p>;
  }

  render() {
    const { objectDogPhoto } = this.state;
    return (
      <div className="App">
        {objectDogPhoto ? <Image image={objectDogPhoto.message} /> : this.loading()}
        <button onClick={this.fetchPhotoDog} >Altere a Imagem</button>
      </div>
    );
  }
}

export default App;
