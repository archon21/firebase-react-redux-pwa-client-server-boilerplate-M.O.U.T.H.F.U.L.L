import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { Navbar, Footer } from './components';
import Routes from './routes';
import { willReadDB, alertInteraction } from './store';
import { Alert, Loader, Fab } from './sub-components';

// const firestore = firebase.firestore();

class App extends Component {
  state = {
    mounted: false
  };
  async componentDidMount() {
    await this.props.willReadDB('all');
    this.setState({ mounted: true });
    console.log(this.props.menu);
  }
  render() {
    const { mounted } = this.state;
    const { alertStatus, alertTemplate } = this.props;
    return mounted ? (
      <div>
        <Fab
          options={[
            {
              name: 'arrow_upward',
              label: 'Back To Top',
              action: () => window.scrollTo(0, 0)
            },
            {
              name: 'home',
              label: 'Properties',
              action: () => this.props.history.push('/holdings/properties')
            }
          ]}
        />
        <Alert
          open={alertStatus}
          template={alertTemplate}
          onClickCatcher={() => this.props.alertInteraction(false)}
        />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    ) : (
      <Loader />
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
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
