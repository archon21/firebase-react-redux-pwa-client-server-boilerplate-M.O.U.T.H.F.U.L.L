import React from 'react';

const WindoW = props => {
  const { backgroundUrl, background, maxWidth, column, padding, video, align } = props;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={`${background && background} ${padding &&
        padding} ${backgroundUrl && 'background-cover'} flex ${
        column ? 'column' : 'row'
      }
      ${video && 'maxw-100vw maxw-100vh'}
      ${maxWidth && maxWidth}
      wrap ${align ? align : 'align-center'} justify-center  w-100vw minh-100vh`}
    >
      {props.children}
    </div>
  );
};

export default WindoW;
