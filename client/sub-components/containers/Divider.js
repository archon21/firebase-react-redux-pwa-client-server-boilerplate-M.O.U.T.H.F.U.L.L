import React from 'react';

const Divider = props => {
  const { background, color, border } = props;
  return (
    <div
      className={`${background && background} ${color && color} ${border &&
        'block__border-top block__border-bottom'} divider flex align-center justify-center minw-100vw minh-10vh text-center`}
    >
      {props.children}
    </div>
  );
};

export default Divider;
