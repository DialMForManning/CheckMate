import React from 'react';
import { Link } from 'react-router';

class NavLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password',
      inputClass: 'nav_form_input'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputClass = 'nav_form_input';
    this.displayForm = this.displayForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  }

  displayForm(e) {
    e.preventDefault();
    this.setState({inputClass: 'nav_form_input_displayed'});
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
      <nav className={"nav_login_form"}>
        <form onSubmit={ this.handleSubmit }>
          <ul className="nav_buttons group">

            <li className="nav_signup">
              <button >
                { "Sign up" }
              </button>
            </li>
            <li className="or">{ "or" }</li>
            <li className="nav_login">
              <button onClick={ this.displayForm }>
                { "Log in" }
              </button>
            </li>
          </ul>

          <section className={ this.state.inputClass }>
            <input
              type="text"
              value={ this.state.email }
              onChange={ this.update('email') }
              />
            <input
              type="password"
              value={ this.state.password }
              onChange={ this.update('password') } />

            <input
              type='submit'
              value='Log in to CheckMate' />
          </section>
        </form>
      </nav>
    );
  }
}

export default NavLogin;
