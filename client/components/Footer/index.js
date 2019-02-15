import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
const Footer = props => {
  const { phone, company } = props;
  return (
    <footer id="footer-container">

      <div
        id="footer-container__inner"
        className="flex row wrap items-start justify-center align-center"
      >
        <div id="footer-names-left" className="column wrap flex margin-10px">
          <p className="body-1" style={{ color: 'gold' }}>Richard P. Hayes, Sr. <p className="body-2 footer-striped" style={{ paddingLeft: '1em' }}>Principal</p></p>

          <p className="body-1" style={{ color: 'gold' }}>Richard P. Hayes, Jr. <p className="body-2 footer-striped" style={{ paddingLeft: '1em' }}>Principal</p></p>

        </div>

        <div className="flex column wrap  align-center">
          <h1 id="info-block">Hayes Developers</h1>
          <div className="flex row wrap justify-center">
            <div className=" margin-10px flex column wrap text-center">
              <p>1471 Pleasant Valley Road <p> Manchester, CT 06042</p></p>

            </div>
            <div className="flex column wrap margin-10px text-left">
              <p>Ph: (860) 646-0131 <p>Fax: (860) 644-9073</p></p>

            </div>
          </div>
        </div>
        <div id="footer-names-right" className=" margin-10px column wrap flex">
          <p className="body-1" style={{ color: 'gold' }}>Sandra L. Wilkins <p className="body-2 footer-striped">Property Manager</p></p>

          <p className="body-1" style={{ color: 'gold' }}>Bonnie L. Trimble-Cushman <p className="body-2 footer-striped">Office Manager</p></p>

        </div>

      </div>

      <div className="flex column wrap align-center justify-center">
      <div className="flex row wrap align-center justify-center">
      <Link to="/privacy" className="body-1 link color-secondary py-5px">
          Privacy
      </Link>
        <Link to="/about" className="body-1 link color-secondary py-5px">
          About
        </Link>
        <Link to="/hayes-team" className="body-1 link color-secondary py-5px">
         The Hayes Team
        </Link>
        <Link to="/property-services" className="body-1 link color-secondary py-5px">
          Property Management
        </Link>
      </div>
        <p className="body-2 text-center">© 2015 Copyright Hayes Developers. All rights reserved.</p>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Footer);
