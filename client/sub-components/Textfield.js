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
    const { name, required, type, placeholder, error} = this.props;
    return (
      <div className="textfield-wrapper">
        <input
          name={name}
          onChange={this.handleChange}
          className="textfield"
          value={value}
          type={type ? type : name}
          required={required}
          placeholder={placeholder ? placeholder : name}
        />
        {error && (
          <div className="card textfield__message">
            <p className="body-1 color-primary">This is a required field!</p>
          </div>
        ) }
      </div>
    );
  }
}

export default Textfield;
