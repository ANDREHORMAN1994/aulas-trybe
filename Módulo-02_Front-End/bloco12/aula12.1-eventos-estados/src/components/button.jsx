import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleLessClick = this.handleLessClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      count: 0,
    };
  }

  handlePlusClick({ target }) {
    // console.log('Adicionou');
    target.style.backgroundColor = 'blue';
    target.style.color = 'white';

    this.setState(
      (previousElement) => ({
        count: previousElement.count + 1,
      }),
      () => {
        if (this.state.count % 2 === 0) target.style.backgroundColor = 'green';
        console.log(target.style.backgroundColor);
      },
    );
  }

  handleLessClick({ target }) {
    // console.log('Diminuiu');
    target.style.color = 'red';

    this.setState((previousElement) => ({
      count: previousElement.count - 1,
    }));
  }

  changeColor(color) {
    const button = document.querySelector('.button-element');
    button.style.color = 'black';
    button.style.backgroundColor = color;
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePlusClick} className="button-element">
          Clique aqui: {this.state.count}
        </button>
        <div>
          <button onClick={() => this.changeColor('red')} className="button1">
            VERMELHO
          </button>
          <button
            onClick={() => this.changeColor('yellow')}
            className="button2"
          >
            AMARELO
          </button>
          <button onClick={this.handleLessClick}>DIMINUIR</button>
        </div>
      </div>
    );
  }
}

export default Button;
