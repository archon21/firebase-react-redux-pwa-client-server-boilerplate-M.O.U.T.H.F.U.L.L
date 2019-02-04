import React, { Component } from 'react';
import { Textfield } from '../../sub-components';

class ContactForm extends Component {
  dataHook = data => {
    this.setState({ [data.name]: data.value });
    console.log(data)
  };
  render() {
    return (
      <div className="flex column align-center">
       <h4 className="headline-5 color-primary">How Can We Help?</h4>
        <Textfield name="name" dataHook={this.dataHook} />
        <Textfield name="email" dataHook={this.dataHook} />
        <Textfield name="message" dataHook={this.dataHook} />
      </div>
    );
  }
}

export default ContactForm;
