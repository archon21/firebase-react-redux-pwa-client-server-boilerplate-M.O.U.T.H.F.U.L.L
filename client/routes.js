import React, {Component} from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import {LandingPage} from './componenets'
import {NotFound} from './sub-components'


class Routes extends Component{
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes
