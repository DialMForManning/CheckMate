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

  componentDidMount() {
    this.props.clearErrors();
    $("#signup_focus").focus();
  }

  componendDidUpdate() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
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

    const user = {
      email: this.state.email,
      password: this.state.password,
      fname: this.state.fname,
      lname: lnameSubmit
    };

    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul className="signup_errors group">
        { this.props.errors.map((error, idx) => {
          return(<li key={ idx }>{ error }</li>);
        })
      }
      </ul>
    );
  }

  render() {
    return(
      <main className="signup_content group">
        <form className="signup_form group" onSubmit={ this.handleSubmit }>
          <h2>{ "INTRODUCE YOURSELF" }</h2>
          <h3>{ "Hi there! My name is:" }</h3>
          <input
            id="signup_focus"
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
        { this.renderErrors() }
      </main>
    );
  }

}

export default SignupForm;
