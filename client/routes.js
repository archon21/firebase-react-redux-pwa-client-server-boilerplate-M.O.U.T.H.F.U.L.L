import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './componenets';
import { NotFound, Loader } from './sub-components';

class Routes extends Component {
  state = { mounted: false };
  // componentDidMount() {
  //   this.setState({ mounted: true });
  // }
  render() {
    const {mounted} = this.state
    return mounted ? (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    ) : (
      <Loader />
    );
  }
}

export default Routes;
