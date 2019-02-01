import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertInteraction } from '../store';

class Alert extends Component {
  state = {
    open: this.props.open,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.open !== nextProps.open) return { open: nextProps.open };
    else return {};
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.open !== this.props.open) this.handleOpen();
  // }

  // handleOpen = inAlert => {
  //   const { open } = this.state;
  //   const { onClickCatcher } = this.props;
  //   const newOpen = !open;
  //   // inAlert
  //   //  onClickCatcher && onClickCatcher()
  //    this.setState({ open: newOpen })
  // };

  render() {
    const { open } = this.state;
    const { template, customStyle } = this.props;
    return open ? (
      <div className="alert flex align-center justify-center">
        <div className="alert__catcher" onClick={this.props.alertInteraction} />
        <div
          style={customStyle && customStyle}
          className="alert__container"
        >
          {template && template}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: () => dispatch(alertInteraction(false))
});

export default connect(
  null,
  mapDispatchToProps
)(Alert);
