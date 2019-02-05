import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    focuseditem: this.props.items[0],
    focusedIndex: 0,
    inTransition: 'no-transition'
  };

  handleLoad = () => {
    this.setState({
      inTransition: 'no-transition'
    });
  };

  nextitem = () => {
    this.setState({ inTransition: 'transition' });
    const { items } = this.props;
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === items.length - 1) {
        this.setState({
          focuseditem: items[0],
          focusedIndex: 0
        });
      } else {
        const newIndex = focusedIndex + 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex]
        });
      }
    }, 800);
  };

  previtem = () => {
    this.setState({ inTransition: 'transition' });
    const { items } = this.props;
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === 0) {
        this.setState({
          focuseditem: items[items.length - 1],
          focusedIndex: items.length - 1
        });
      } else {
        const newIndex = focusedIndex - 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex]
        });
      }
    }, 800);
  };

  render() {
    const { focuseditem, inTransition, focusedIndex } = this.state;
    const { items } = this.props;
    console.log(focuseditem);
    return (
      <div
        className={`${inTransition} flex column align-center w-100 maxw-1100px`}
        style={{ minHeight: '60vh', position: 'relative' }}
      >
        <div className="maxw-1100px w-100" style={{ position: 'relative' }}>
          <img
            className="w-100"
            onLoad={this.handleLoad}
            style={{
              height: '60vh',
              borderRadius: '5px',

              objectFit: 'cover',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px'
            }}
            src={focuseditem.image}
          />
          <div className="special-text flex row wrap align-center justify-space-evenly">
            <p className="headline-4 color-white text-center">
              {focuseditem.primary}
            </p>
            <p className="headline-4 color-white text-center">
              {focuseditem.secondary}
            </p>
          </div>
        </div>
        <div onClick={this.previtem} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextitem} className="carosuel-left-button">
          <span />
          <span />
        </div>
        <ul className="carosuel-index">
          {items.map((item, index) => {
            return <li key={item.image} className={focusedIndex === index ? 'active' : null} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Carousel;
