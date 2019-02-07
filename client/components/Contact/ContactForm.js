import React, { Component } from 'react';
import { Textfield } from '../../sub-components';

class ContactForm extends Component {
  state = {
    email: '',
    name: '',
    message: '',
    all: false,
    error: {}
  };
  dataHook = data => {
    this.setState({ [data.name]: data.value });
    console.log(data);
  };
  handleSubmit = event => {
    event.preventDefault();
    let all = true;
    const error = {};
    Object.entries(this.state).forEach(field => {
      if (field[1] === '') {
        all = false;
        error[field[0]] = true;
      }
    });
    if (all) console.log(this.state);
    else this.setState({ error });
  };
  render() {
    const { error } = this.state;
    return (
      <form className="flex column align-center" onSubmit={this.handleSubmit}>
        <h4 className="headline-5 color-primary">How Can We Help?</h4>
        <Textfield error={error.name} name="name" dataHook={this.dataHook} />
        <Textfield error={error.email} name="email" dataHook={this.dataHook} />
        <Textfield
          error={error.message}
          placeholder="Whats on your mind?"
          name="message"
          dataHook={this.dataHook}
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
