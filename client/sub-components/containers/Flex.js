import React from 'react';

const Flex = props => {
  const { backgroundColor, maxWidth, column, padding, style, width } = props;
  return (
    <div
      style={style}
      className={`${backgroundColor && backgroundColor}
       ${padding && padding}
       flex ${column ? 'column' : 'row'}
       ${width ? width : 'w-100'}
      ${maxWidth && maxWidth}
      wrap align-center justify-center maxw-100vw`}
    >
      {props.children}
    </div>
  );
};

export default Flex;
