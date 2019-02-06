import React from 'react';

import { WindoW, Divider } from '../sub-components/containers';
import { Video } from '../sub-components';

const Info = () => {
  return (
    <div>
      <WindoW background="background-primary">
        <Video video="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Pexels%20Videos%202880.mp4?alt=media&token=8bd4aaf4-cbf7-4d3d-bf7f-2c2b40926b48" >
            <h1>Cool</h1>
        </Video>
      </WindoW>
      <Divider>
        <h1 className="headliner-1 color-primary">
          Carousel For Most Important Content
        </h1>
      </Divider>
    </div>
  );
};

export default Info;
