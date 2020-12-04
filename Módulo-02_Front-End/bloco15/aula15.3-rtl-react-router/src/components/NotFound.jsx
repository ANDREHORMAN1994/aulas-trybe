import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>ERROR: NOT FOUND</h1>
        <Link to="/">VOLTAR</Link>
      </div>
    )
  }
}

export default NotFound;
