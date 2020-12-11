import React, { Component } from 'react';
import Input from './components/Input';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aprendendo Redux</h1>
        <Input />
        <Content />
      </div>
    );
  }
}

export default App;
