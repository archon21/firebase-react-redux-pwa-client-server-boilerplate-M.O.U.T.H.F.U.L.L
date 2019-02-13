import React, { Component } from 'react';
import { Loader } from '../sub-components';

class Video extends Component {
  state = {
    loaded: false
  };
  handleLoad = () => {
    this.setState({ loaded: true });
  };
  render() {
    const { loaded } = this.state;
    const { video } = this.props;
    return (
      <video
        style={{ overflow: 'hidden'}}
        autoPlay
        loop
        className="maxw-100 h-100 object-cover"
        src={video}
      />
    );
  }
}

export default Video;
