import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
const Footer = props => {
  const { phone, company } = props;
  return (
    <footer id="footer">
      <h5 className="headline-5 color-secondary">{phone}</h5>
      <p className="body-2 color-secondary">2019 {company}</p>
      <div className="flex row wrap align-center">
        <Link to="/privacy" className="body-2 link color-secondary">
          Privacy
        </Link>
        <Link to="/about" className="body-2 link color-secondary">
          About
        </Link>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Footer);
