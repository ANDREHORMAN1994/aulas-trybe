import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.updateComment = this.updateComment.bind(this);
    this.executeComment = this.executeComment.bind(this);

    this.state = {
      comment: '',
      showComment: '',
    };
  }

  updateComment(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  executeComment() {
    this.setState({
      comment: '',
      showComment: this.state.comment,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>HELLO WORLD</h1>
        <div>
          <label htmlFor="testId">BLOCO 15.1 - React-Test-Library</label>
          <input
            type="text"
            name="comment"
            id="testId"
            value={this.state.comment}
            onChange={this.updateComment}
          />
        </div>
        <button data-testid="IdButtonSend" onClick={this.executeComment}>
          ENVIAR
        </button>
        <button>VOLTAR</button>
        <h2 data-testid="resultId" >VALOR: {this.state.showComment}</h2>
      </div>
    );
  }
}

export default App;
