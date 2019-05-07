import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Footer = props => {
  const { phone, company } = props;
  return (
    <footer id="footer" className="flex column align-center">
      <div className="flex row wrap align-center justify-center">
        <Link to="/privacy" className="body-1 link color-secondary py-5px">
          Privacy
        </Link>
        <Link to="/home" className="body-1 link color-secondary py-5px">
          Home
        </Link>
        <Link to="/about" className="body-1 link color-secondary py-5px">
          About
        </Link>
        <Link to="/info" className="body-1 link color-secondary py-5px">
          Info
        </Link>
      </div>
      <p className="body-1 text-center">
       {phone}
      </p>
      <p className="body-2 text-center">
        © 2015 Copyright {company}. All rights reserved.
      </p>
    </footer>
  );
};

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Footer);
