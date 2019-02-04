import React from 'react';
import { ShareButtons } from '../../sub-components';


const GalleryBlock = props => {
  const { style, data } = props;
  return (
    <div className="knife-card flex column align-center m-10px ">
      <div className="flex column align-center inner">
        <p className="headline-4 color-white">{data.name}</p>
        <ShareButtons target={{ title: data.name, url: data.url }} />
      </div>
      <img src={data.image} />
    </div>
  );
};

export default GalleryBlock;
