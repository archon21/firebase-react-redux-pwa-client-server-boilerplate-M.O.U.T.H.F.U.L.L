import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    open: true
  };

  onPress = () => {
    const css = !this.state.open;
    this.setState({ open: css });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="flex column wrap black ">
        <div id="titleContainer" className="flex wrap row">
          <h1 id="title">INSERT</h1>
          {open ? (
            <div id="nav-icon1" onClick={() => this.onPress()}>
              <span />
              <span />
              <span />
            </div>
          ) : (
            <div id="nav-icon1" className="open" onClick={() => this.onPress()}>
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <nav>
          {!open ? (
            <div id="nav-links">
              <Link to="/LandingPage">Home</Link>
            </div>
          ) : (
            <div />
          )}
        </nav>
        <hr />
      </div>
    );
  }
}

export default Navbar;
