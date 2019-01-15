import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavHButton from './NavHButton';

class Navbar extends Component {
  state = {
    open: true
  };

  toggleNavH = () => {
    const css = !this.state.open;
    this.setState({ open: css });
  };

  render() {
    const { open } = this.state;
    return (
      <nav id="nav" className="flex column black align-center">
        <div className="flex row items-center">
          <NavHButton open={open} toggleNavH={this.toggleNavH} />
          <h1 className="nav__title ">INSERT</h1>
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
