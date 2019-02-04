import React from 'react';

const WindoW = props => {
  const { style } = props;
  return (
    <div
      style={style}
      className="flex column align-center minw-100vw minh-100vh"
    >
      {props.children}
    </div>
  );
};

export default WindoW;
