import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Info, About } from './components';
import { NotFound, Loader } from './sub-components';
import Privacy from './components/Footer/Privacy';
class Routes extends Component {
  state = { mounted: false };
  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    const { mounted } = this.state;
    return mounted ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    ) : (
      <Loader />
    );
  }
}

export default Routes;
