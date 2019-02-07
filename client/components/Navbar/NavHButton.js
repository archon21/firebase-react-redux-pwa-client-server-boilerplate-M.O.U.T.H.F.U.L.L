import React from 'react';

const NavHButton = props => {
  const { open, toggleNavH } = props;
  return open ? (
    <div id="nav-icon1" onClick={() => toggleNavH()}>
      <span />
      <span />
      <span />
    </div>
  ) : (
    <div id="nav-icon1" className="open" onClick={() => toggleNavH()}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default NavHButton;
