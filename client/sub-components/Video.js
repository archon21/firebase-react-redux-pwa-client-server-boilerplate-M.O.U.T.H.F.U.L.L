import React, {Component} from 'react';
import { Loader} from '../sub-components';

class Video extends Component {
  state = {
    loaded: false
  };
  handleLoad = () => {
    this.setState({ loaded: true });
  };
  render() {
    const { loaded } = this.state;
    return loaded ? <video onLoad={this.onLoad} src={video} /> : <Loader />;
  }
}

export default Video
