import React from 'react';

const Block = props => {
  const { style, type, onClick, column } = props;
  const direction = column ? 'column' : 'row'
  return (
    <div
      onClick={onClick ? onClick : null}
      style={style}
      className={`${type}  flex ${direction} align-center minw-325px minh-325px`}
    >
      {props.children}
    </div>
  );
};

export default Block;
