import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Navbar, Footer } from './componenets';
import Routes from './routes';


// const firestore = firebase.firestore();

class App extends Component {
  state = {};
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}
export default App;
