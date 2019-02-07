import React from 'react';

const WindoW = props => {
  const { backgroundUrl, background, maxWidth,  column, padding } = props;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={`${background && background} ${padding &&
        padding} ${backgroundUrl && 'background-cover'} flex ${
        column ? 'column' : 'row'
      }
      ${maxWidth && maxWidth}
      wrap align-center justify-center w-100vw minh-100vh`}
    >
      {props.children}
    </div>
  );
};

export default WindoW;
