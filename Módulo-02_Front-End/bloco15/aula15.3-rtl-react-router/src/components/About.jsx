import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>ABOUT</h1>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    )
  }
}

export default About;
