import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import {LandingPage} from './componenets'

class Routes extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/LandingPage" component={LandingPage} />
      </Switch>
    );
  }
}

export default Routes
