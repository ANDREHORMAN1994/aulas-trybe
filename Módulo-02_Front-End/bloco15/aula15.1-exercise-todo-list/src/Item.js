import React from 'react';
import PropTypes from 'prop-types'

class Item extends React.Component{
  constructor() {
    super();

    this.selectTask = this.selectTask.bind(this);

    this.state = {
      checked: false,
    }
  }

  selectTask({ target }) {
    // console.log(target.classList.contains('Item'));
    if(target.classList.contains('Item')) {
      target.classList.remove('Item');
      target.classList.add('ItemSelected');
      this.setState({ checked: true });
    } else {
      target.classList.remove('ItemSelected');
      target.classList.add('Item');
      this.setState({ checked: false });
    }
    // const { selected } = this.props;
    // selected(target, this.state.checked);
  }

  render() {
    const { content } = this.props;
    return (
      <div className="Item" data-testid="id-content-list" onClick={this.selectTask} >
        {content}
      </div>
    );
  }
}

Item.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Item;
