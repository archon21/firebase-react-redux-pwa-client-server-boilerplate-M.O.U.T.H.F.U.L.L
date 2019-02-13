import React, { Component } from 'react';

class Block extends Component {
  refHook = () => {
    console.log(this.props.ref);
    return this[this.props.ref];
  };
  render() {
    const {
      children,
      style,
      type,
      onClick,
      column,
      image,
      color,
      backgroundColor,
      maxHeight,
      maxWidth,
      full
    } = this.props;
    const direction = column ? 'column' : 'row';
    console.log(full)
    return (

      <div
        onClick={onClick ? onClick : null}
        style={style}
        className={`${type && type}
        ${backgroundColor && backgroundColor}
        ${maxWidth && maxWidth}
        ${maxHeight && maxHeight}
        ${full && 'h-100'}
        ${image ? 'justify-space-evenly' : 'justify-center'}  flex ${direction} ${color && color} align-center minw-325px minh-325px`}
      >
        {children}
      </div>
    );
  }
}

export default Block;
