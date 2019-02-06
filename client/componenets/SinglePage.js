import React, { Component } from 'react';
import { WindoW } from '../sub-components/containers';

class SinglePage extends Component {
  state = {
    target: null
  };
  async componentDidMount() {
    if (this.props.location.state) {
      this.setState({ target: this.props.location.state });
    } else {
      const { pathname } = this.props.location;
      const targetArr = pathname.split('/');
      const target = targetArr[targetArr.length - 1];
      await this.props.getTarget(target);
      const { foundTarget } = this.props;
      this.setState({target: foundTarget})
    }
  }
  redner() {
    return (
      <div>
        <WindoW>
          <h1 className="headline-1">Single Page</h1>
        </WindoW>
      </div>
    );
  }
}

export default SinglePage;
