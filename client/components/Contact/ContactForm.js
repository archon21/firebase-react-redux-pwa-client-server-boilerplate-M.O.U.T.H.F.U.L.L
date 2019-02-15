import React, { Component } from 'react';
import { Textfield } from '../../sub-components';
import {connect} from 'react-redux'
import {alertInteraction, sendMessage} from '../../store'

class ContactForm extends Component {
  state = {
    email: '',
    name: '',
    message: '',
    subject: '',
    phone: '',
    all: false,
    error: {},
    sent: false
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
    if (all) {
      this.props.sendMessage(this.state)
      this.setState({error: {}, sent: true})
    } else {
      this.setState({ error });
    }
  };
  render() {
    const { error, sent } = this.state;
    return (
      sent ?
      <div className="flex column align-center minh-600px minw-325px">
        <h4 className="headline-4">Your Message has been Sent.</h4>

      </div>
      :
      <form className="flex column align-center" onSubmit={this.handleSubmit}>
        <div className="flex row align-center">
        <button type="button" onClick={() => this.props.alertInteraction(false)} className="small-icon rounded material-icons">
        cancel
        </button>
        <h4 className="headline-5 color-primary">How Can We Help?</h4>
        </div>
        <Textfield placeholder="Name" error={error.name} name="name" dataHook={this.dataHook} />
        <Textfield placeholder="Email" error={error.email} name="email" dataHook={this.dataHook} />
        <Textfield placeholder="Phone" error={error.phone} name="phone" dataHook={this.dataHook} />
        <Textfield placeholder="Subject" error={error.subject} name="subject" dataHook={this.dataHook} />
        <Textfield
          error={error.message}
          placeholder="Whats on your mind?"
          name="message"
          dataHook={this.dataHook}
          multiline
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: () =>  dispatch(alertInteraction(false)),
  sendMessage: message => dispatch(sendMessage(message))
})

export default connect(null, mapDispatchToProps)(ContactForm)
