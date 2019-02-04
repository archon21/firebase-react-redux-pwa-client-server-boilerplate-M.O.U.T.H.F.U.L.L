import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Home } from './componenets';
import { NotFound, Loader } from './sub-components';

class Routes extends Component {
  state = { mounted: false };
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const {mounted} = this.state
    return mounted ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    ) : (
      <Loader />
    );
  }
}

export default Routes;
