import React from 'react';

const Divider = props => {
  const { background, color, mX, mY } = props;
  return (
    <div

      className={`${background} ${color} ${mX} ${mY} flex align-center justify-center minw-100vw minh-10vh text-center`}
    >
      {props.children}
    </div>
  );
};

export default Divider;
