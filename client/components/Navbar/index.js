import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  openContact = () => {
    this.props.alertInteraction(true, <Contact />);
  };

  selectLink = link => {
    console.log(link);
    this.setState({ selectedLink: link });
  };

  render() {
    const {  selectedLink } = this.state;
    return (
      <nav id="nav" className="flex row align-center justify-center black ">
        <h1 className="typograpy--headline4 color-white logo nav__logo">INSERT TITLE</h1>
        <div className="flex row align-center">
          <Link
            className={`nav__link headline-5 color-white p-5px ${selectedLink ===
              'home' && 'selected'}`}
            onClick={() => this.selectLink('home')}
            to={{ pathname: '/home' }}
          >
            Home
          </Link>
          <Link
            className={` nav__link headline-5 color-white p-5px ${selectedLink ===
              'about' && 'selected'}`}
            to={{ pathname: '/about' }}
            onClick={() => this.selectLink('about')}
          >
            About
          </Link>
          <div className="flex row align-center">
            <h5
              className="headline-5 color-white"
              onClick={this.openContact}
            >
              Contact
            </h5>
          </div>
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
