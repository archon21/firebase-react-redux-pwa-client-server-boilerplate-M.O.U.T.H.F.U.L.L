import React, { Component } from 'react';

class Textfield extends Component {
  state = {
    value: ''
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ value: value });
    this.props.dataHook({ name, value });
    console.log(name, value);
  };
  render() {
      const { value } = this.state;
      const { name, required, type } = this.props;
    return (
      <input
        name={name}
        onChange={this.handleChange}
        className="textfield"
        value={value}
        type={type ? type : name}
        required={required}
      />
    );
  }
}

export default Textfield;
