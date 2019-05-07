import React from 'react';

const Divider = props => {
  const {  color, border, backgroundColor } = props;
  return (
    <div
      className={` ${backgroundColor && backgroundColor} ${color &&
        color} ${border &&
        'block__border-top block__border-bottom'} divider flex column align-center justify-center minw-100vw minh-10vh text-center`}
    >
      {props.children}
    </div>
  );
};

export default Divider;
