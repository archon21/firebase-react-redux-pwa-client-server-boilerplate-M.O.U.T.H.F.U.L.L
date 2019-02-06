import React from 'react';

const Block = props => {
  const { style, type, onClick } = props;

  return (
    <div
      onClick={onClick ? onClick : null}
      style={style}
      className={`${type} flex column align-center minw-325px minh-325px`}
    >
      {props.children}
    </div>
  );
};

export default Block;
