import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  deleteTask() {
    const list = document.getElementsByClassName('Item');

    let newArray = [];
    for(let i = 0; i < list.length; i += 1) {
      newArray.push(list[i].innerHTML);
    }
    console.log(newArray);

    this.setState({
      listTodo: [...newArray],
    },
    () => {
      let listSelected = document.getElementsByClassName('ItemSelected');
      for(let i = 0; i < listSelected.length; i += 1) {
        listSelected[i].classList.remove('ItemSelected');
      }
    })
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index + 1}>
                <Item content={todo}  />
              </li>
            ))}
          </ul>
        )}
        <button onClick={this.deleteTask}>DELETE SELECTED TASK</button>
      </div>
    );
  }
}

export default App;
