import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let lnameSubmit = this.state.lname;

    if (lnameSubmit === 'Last Name (optional)' || lnameSubmit === '') {
      lnameSubmit = null;
    }

    debugger

    const user = {
      email: this.state.email,
      password: this.state.password,
      fname: this.state.fname,
      lname: lnameSubmit
    };

    this.props.signup(user);
  }

  render() {
    return(
      <main className="signup_content group">
        <form className="signup_form group" onSubmit={ this.handleSubmit }>
          <h2>{ "INTRODUCE YOURSELF" }</h2>
          <h3>{ "Hi there! My name is:" }</h3>
          <input
            type="text"
            className="fname"
            placeholder="First Name"
            value={ this.state.fname }
            onChange={ this.update('fname') } />
          <input
            type="text"
            className="lname"
            placeholder="Last Name (optional)"
            value={ this.state.lname }
            onChange={ this.update('lname') } />
          <input
            type="text"
            className="email"
            placeholder="email"
            value={ this.state.email }
            onChange={ this.update('email') } />
          <input
            type="password"
            className="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.update('password') } />

          <input
            type="submit"
            value="Sign me up!" />
        </form>
      </main>
    );
  }

}

export default SignupForm;
