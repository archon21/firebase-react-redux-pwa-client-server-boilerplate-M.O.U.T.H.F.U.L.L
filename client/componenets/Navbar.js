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
      <nav id="nav" className="flex column black text-center">
        <div className="flex row items-center">
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
        <h1 className="nav__title">INSERT</h1>
        </div>
        {!open ? (
          <div id="nav-links">
            <Link to="/home">Home</Link>
          </div>
        ) : (
          <div />
        )}
      </nav>
    );
  }
}

export default Navbar;
