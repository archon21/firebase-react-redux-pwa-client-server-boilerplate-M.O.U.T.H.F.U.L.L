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
        <div className="nav-h__upper flex row items-center">
          <NavHButton open={open} toggleNavH={this.toggleNavH} />
          <Link to={{ pathname: '/' }}>
            <span className="nav__logo-text">Logo</span>
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/logo.png?alt=media&token=a014a66a-b1c2-411c-bede-55117ca8e205" className="nav__logo" /> */}
          </Link>
        </div>

        <div
          className={` ${!open &&
            'open'} nav-h__lower flex row wrap align-center justify-center nav-h__links `}
        >
          <Link
            className={`headline-6 p-5px nav__link ${selectedLink === 'home' &&
              'selected'}`}
            to={{ pathname: '/home' }}
            onClick={() => this.selectLink('home')}
          >
            HOME
          </Link>
          <Link
            className={`headline-6  p-5px nav__link ${selectedLink ===
              'about' && 'selected'}`}
            to={{ pathname: '/about' }}
            onClick={() => this.selectLink('about')}
          >
            ABOUT
          </Link>
          <Link
            className={`headline-6  p-5px nav__link ${selectedLink === 'info' &&
              'selected'}`}
            to={{ pathname: '/info' }}
            onClick={() => this.selectLink('info')}
          >
            INFO
          </Link>

          <h1 className="headline-6 p-5px nav__link" onClick={this.openContact}>
            CONTACT
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
