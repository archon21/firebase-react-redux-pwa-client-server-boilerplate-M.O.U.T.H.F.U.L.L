import React from 'react';

const Flex = props => {
  const {
    backgroundColor,
    maxWidth,
    column,
    padding,
    style,
    width,
    minWidth
  } = props;
  return (
    <div
      style={style}
      className={`${backgroundColor && backgroundColor}
       ${padding && padding}
       flex ${column ? 'column' : 'row'}
       ${width ? width : 'w-100'}
       ${minWidth ? minWidth : 'minw-325px'}
       ${maxWidth ? maxWidth : 'maxw-100vw'}
      wrap align-center justify-center`}
    >
      {props.children}
    </div>
  );
};

export default Flex;
