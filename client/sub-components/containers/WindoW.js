import React from 'react';

const WindoW = props => {
  const {backgroundUrl, background, imgFixed } = props;
  return (
    <div
      style={{backgroundImage: `url(${backgroundUrl})`}}
      className={`${background} ${backgroundUrl && 'background-cover'} flex column align-center minw-100vw minh-100vh`}
    >
      {props.children}
    </div>
  );
};

export default WindoW;
