import React from 'react';
import './App.css';
import Image from './components/photo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPhotoDog = this.fetchPhotoDog.bind(this);
    this.loading = this.loading.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.handleNameDog = this.handleNameDog.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.currentLocalStorage = this.currentLocalStorage.bind(this);
    this.alertRace = this.alertRace.bind(this);

    this.state = {
      loading: true,
      objectDogPhoto: undefined,
      name: '',
      localStorage: false,
    };
  }

  async fetchPhotoDog() {
    this.setState({ loading: true }, async () => {
      const endPoint = 'https://dog.ceo/api/breeds/image/random';
      const fetchPhoto = await fetch(endPoint);
      const object = await fetchPhoto.json();
      // console.log(object.message);
      console.log(object.message.includes('terrier'));

      if (this.state.objectDogPhoto && object.message.includes('terrier')) {
        this.setState(({ objectDogPhoto }) => ({
          loading: false,
          objectDogPhoto: objectDogPhoto,
        }));
        alert('Possui Terrier, não atualiza');
      } else {
        this.setState({
          loading: false,
          objectDogPhoto: object,
        });
      }
    });
  }

  alertRace() {
    const { objectDogPhoto } = this.state;

    if (objectDogPhoto) {
      const { message } = objectDogPhoto;
      const arrayDogRace = message.split('/');
      const lengthArray = arrayDogRace.length;
      // console.log(arrayDogRace)
      alert(`Raça do Dog é : ${arrayDogRace[lengthArray - 2]}`);
    }
  }

  componentDidMount() {
    if (localStorage.getItem('local')) {
      this.setState(
        { localStorage: true },
        () => this.state.localStorage && this.currentLocalStorage(),
      );
    } else {
      this.fetchPhotoDog();
      // this.alertRace();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState.objectDogPhoto)
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // this.alertRace();
  }

  loading() {
    return <p>...LOADING</p>;
  }

  handleNameDog(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  changeImg() {
    this.setState({ localStorage: false });
    this.fetchPhotoDog();
  }

  handleLocalStorage() {
    const { name, objectDogPhoto } = this.state;

    localStorage.setItem('local', true);
    localStorage.setItem('dog', JSON.stringify([name, objectDogPhoto]));
  }

  currentLocalStorage() {
    const array = JSON.parse(localStorage.getItem('dog'));
    const nameDog = array[0];
    const objectDog = array[1];
    console.log(nameDog);
    console.log(objectDog);

    this.setState({
      name: nameDog,
      objectDogPhoto: objectDog,
      loading: false,
    });
  }

  render() {
    const { objectDogPhoto, loading } = this.state;
    return (
      <div className="App">
        { this.state.localStorage ? 
        <h1>{JSON.parse(localStorage.getItem('dog'))[0]}</h1> :
        <h1>Escolha um Nome Pra ele</h1>
        }
        <div>
          {loading ? this.loading() : <Image image={objectDogPhoto.message} />}
        </div>
        <div>
          <label htmlFor="name">Coloque um nome no Dog</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleNameDog}
          />
        </div>
        <button onClick={this.changeImg}>Altere a Imagem</button>
        <button onClick={this.handleLocalStorage}>Salve a Imagem</button>
      </div>
    );
  }
}

export default App;
