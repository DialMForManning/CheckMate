import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password',
      fname: 'First Name',
      lname: 'Last Name (optional)'
    };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value});
  }

  render() {
    return(
      <main className="signup_content group">
        <form className="signup_form group">
          <h2>{ "INTRODUCE YOURSELF" }</h2>
          <h3>{ "Hi there! My name is:" }</h3>
          <input
            type="text"
            className="fname"
            value={ this.state.fname }
            onChange={ this.update('fname') } />
          <input
            type="text"
            className="lname"
            value={ this.state.lname }
            onChange={ this.update('lname') } />
          <input
            type="text"
            className="email"
            value={ this.state.email }
            onChange={ this.update('email') } />
          <input
            type="password"
            className="password"
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
