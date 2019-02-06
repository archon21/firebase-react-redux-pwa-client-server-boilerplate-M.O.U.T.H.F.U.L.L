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
    const { video, children } = this.props;
    return (
      <div className="relative w-100 h-100">
        {children}
        <video style={{top: '0'}} autoPlay loop className="h-100 w-100 object-cover absolute" src={video} />
      </div>
    );
  }
}

export default Video;
