import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Footer } from './componenets';
import Routes from './routes';
import { willReadDB, alertInteraction } from './store';
import { Alert } from './sub-components';

// const firestore = firebase.firestore();

class App extends Component {
  state = {};
  async componentDidMount() {
    // await this.props.willReadDB('menu')
    console.log(this.props.menu);
  }
  render() {
    const { alertStatus, alertTemplate } = this.props;
    return (
      <div>
        <Alert
          open={alertStatus}
          template={alertTemplate}
          onClickCatcher={() => this.props.alertInteraction(false)}
        />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state,
  alertTemplate: state.util.alertTemplate,
  alertStatus: state.util.alertStatus
});

const mapDispatchToProps = dispatch => ({
  willReadDB: field => dispatch(willReadDB(field)),
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
