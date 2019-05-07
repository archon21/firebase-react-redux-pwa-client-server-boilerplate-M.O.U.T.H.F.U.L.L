import React, { Component } from 'react';
import { WindoW } from './containers';

class NotFound extends Component {
  render() {
    return (
      <WindoW>
        <h1>Hmm...</h1>
        <h2>Seems We could not find the page you were looking for.</h2>
      </WindoW>
    );
  }
}

export default NotFound;
