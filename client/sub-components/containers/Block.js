import React from 'react';

const Block = props => {
  const { style } = props;
  return (
    <div
      style={style}
      className="flex column align-center  info-card minw-325px minh-325px"
    >
      {props.children}
    </div>
  );
};

export default Block;
