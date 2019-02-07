import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    open: true,
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  toggleNavH = () => {
    const css = !this.state.open;
    this.setState({ open: css });
  };

  openContact = () => {
    this.props.alertInteraction(true, <Contact />);
  };

  selectLink = link => {
    console.log(link);
    this.setState({ selectedLink: link });
  };

  render() {
    const { open, selectedLink } = this.state;
    return (
      <nav id="nav-h" className="flex column black align-center">
        <div className="flex row items-center">
          <NavHButton open={open} toggleNavH={this.toggleNavH} />
          <h1 className="nav__title color-white">INSERT</h1>
        </div>

        <div className={` ${!open && 'open'} flex row align-center nav-h__links `}>
          <Link
            className={`headline-5 color-white p-5px ${selectedLink ===
              'home' && 'selected'}`}
            onClick={() => this.selectLink('home')}
            to={{ pathname: '/home' }}
          >
            Home
          </Link>
          <Link
            className={`headline-5 color-white p-5px ${selectedLink ===
              'home' && 'selected'}`}
            to={{ pathname: '/about' }}
            onClick={() => this.selectLink('about')}
          >
            About
          </Link>
          <h1
            className="typograpy--headline4 color-white"
            onClick={this.openContact}
          >
            Contact
          </h1>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);
