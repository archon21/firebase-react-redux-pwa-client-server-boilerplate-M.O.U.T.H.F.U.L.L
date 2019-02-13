import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LandingCarousel extends Component {
  state = {
    propertyToDisplay: {},
    index: 0,
    fadeAnimation: 'fade--out',
    nameFadeAnimation: 'fade--out--fast',
    currentInterval: null
  };
  componentDidMount() {
    const curr = setTimeout(() => {
      this.nextImage();
    }, 3700);
    this.setState({
      fadeAnimation: 'fade--in',
      currentInterval: curr,
      nameFadeAnimationL: 'fade--in--fast',
      propertyToDisplay: this.props.properties[this.state.index]
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.currentInterval);
  }

  handleImageLoad = () => {
    const curr = setTimeout(() => {
      this.nextImage();
    }, 3700);
    setTimeout(() => {
      this.setState({
        currentInterval: curr,
        nameFadeAnimation: 'fade--in--fast',
        fadeAnimation: 'fade--in'
      });
    }, 300);
  };

  nextImage = () => {
    const { properties } = this.props;
    const { index, currentInterval } = this.state;
    clearTimeout(currentInterval);
    this.setState({
      fadeAnimation: 'fade--out',
      nameFadeAnimation: 'fade--out--fast'
    });
    if (index === properties.length - 1) {
      setTimeout(() => {
        this.setState({
          index: 0,
          propertyToDisplay: properties[0]
        });
      }, 650);
    } else {setTimeout(() => {
        this.setState({
          index: index + 1,
          propertyToDisplay: properties[index + 1]
        });
      }, 650);}
  };

  prevImage = () => {
    const { properties } = this.props;
    const { index, currentInterval } = this.state;
    clearTimeout(currentInterval);
    this.setState({
      fadeAnimation: 'fade--out',
      nameFadeAnimation: 'fade--out--fast'
    });
    if (index === 0) {
      setTimeout(() => {
        this.setState({
          index: properties.length - 1,
          propertyToDisplay: properties[properties.length - 1]
        });
      }, 450);
    } else {setTimeout(() => {
        this.setState({
          index: index - 1,
          propertyToDisplay: properties[index - 1]
        });
      }, 450);}
  };
  render() {
    const {
      propertyToDisplay,
      fadeAnimation,
      nameFadeAnimation,
      index
    } = this.state;

    const { properties } = this.props;
    return (
      <div id="carousel-container" className={fadeAnimation}>
        <img
          onLoad={this.handleImageLoad}
          className={fadeAnimation}
          src={properties[index].image}
        />

        <div
          className={nameFadeAnimation}
          style={{ display: 'contents' }}
          // to={{
          //   pathname: '/Opportunities/SingleHolding',
          //   state: { page: 'Properties', holding: propertyToDisplay }
          // }}
        >
          <h1 className={nameFadeAnimation + ' carosuel-name'}>
            {' '}
            {propertyToDisplay.name}
          </h1>
        </div>
        <div onClick={this.prevImage} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextImage} className="carosuel-left-button">
          <span />
          <span />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.firebase.holdings.properties
});

export default connect(mapStateToProps)(LandingCarousel);
