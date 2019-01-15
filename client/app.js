import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Navbar, Footer } from './componenets';
import Routes from './routes';
import {willReadDB} from './store'


// const firestore = firebase.firestore();

class App extends Component {
  state = {};
  async componentDidMount() {
    await this.props.willReadDB('menu')
    console.log(this.props.menu)
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

const mapStateToProps = state => ({
  menu: state.firebase.menu
})

const mapDispatchToProps = dispatch => ({
  willReadDB: field => dispatch(willReadDB(field))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
