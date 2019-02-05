import React from 'react';
import { connect } from 'react-redux';
const Footer = props => {
  const { phone, company } = props;
  return (
    <footer id="footer" >
      <h5 className="headline-5 color-secondary">{phone}</h5>
      <p className="body-2 color-secondary">2019 {company}</p>
    </footer>
  );
};

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Footer)
