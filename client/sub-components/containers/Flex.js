import React from 'react';

const Flex = props => {
  const { background, maxWidth, column, padding } = props;
  return (
    <div
      className={`${background && background} ${padding && padding}  flex ${
        column ? 'column' : 'row'
      }
      ${maxWidth && maxWidth}
      wrap align-center justify-center w-100vw minh-20vh`}
    >
      {props.children}
    </div>
  );
};

export default Flex;
