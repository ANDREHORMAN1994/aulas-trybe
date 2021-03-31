import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/actions'

class Input extends Component {
  constructor() {
    super();

    this.changeText = this.changeText.bind(this);
  }

  changeText({ target }) {
    const { value } = target;
    const { changeText } = this.props;
    changeText(value);
  }

  render() {
    const { state: { text } } = this.props;
    return (
      <div>
        <label htmlFor="text" >Escreva seu Texto</label>
        <input type="text" id="text" onChange={this.changeText} value={ text } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.reducerOne,
})

const mapDispatchToProps = (dispatch) => ({
  changeText: (value) => dispatch(actions.changeText(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);
