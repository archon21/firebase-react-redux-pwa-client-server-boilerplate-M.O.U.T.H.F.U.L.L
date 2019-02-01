import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {
    open: true
  };

  toggleNavH = () => {
    const css = !this.state.open;
    this.setState({ open: css });
  };

  openContact = () => {
    this.props.alertInteraction(
      true,
      <div className="card">
        <h1>Contact</h1>
      </div>
    );
  };

  render() {
    const { open } = this.state;
    return (
      <nav id="nav" className="flex column black align-center">
        <div className="flex row items-center">
          <NavHButton open={open} toggleNavH={this.toggleNavH} />
          <h1 className="nav__title color-white">INSERT</h1>
          <h1 className="typograpy--headline4 color-white" onClick={this.openContact}>
            Contact
          </h1>
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

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
