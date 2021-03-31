import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../Redux/actions'

class Content extends Component {
  constructor() {
    super()
    this.showText = this.showText.bind(this);
  }

  showText() {
    const { showText } = this.props;
    showText();
  }

  render() {
    const { state } = this.props;
    const { text, showText } = state;
    console.log(text)
    return (
      <div>
        <p>{ showText }</p>
        <button onClick={ this.showText } >ADD</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.reducerOne,
  }
}

const mapDispatchToProps = (dispatch) => ({
  showText: () => dispatch(actions.showText()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);
