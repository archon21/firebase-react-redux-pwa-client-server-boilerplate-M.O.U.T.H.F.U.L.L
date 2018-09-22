import React, { Componenet } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import {LandingPage} from './componenets'

class Routes extends Componenet {
  render() {
    return (
      <Switch>
        <Route path="/LandingPage" component={LandingPage} />
      </Switch>
    );
  }
}
