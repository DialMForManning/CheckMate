import React from 'react';
import { Link } from 'react-router';

class NavLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

    $(".logo, .get_started, .sign_up, .signup_form input").on('click', () => {
      this.removeForm();
    });

    this.setState({inputClass: 'nav_form_input_displayed'});
  }

  removeForm() {
    this.setState({inputClass: 'nav_form_input'});
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return(
      <ul className="errors group">
        { this.props.errors.map((error, idx) => {
          return(<li key={ idx }>{ error }</li>);
        })
      }
      </ul>
    );
  }

  render() {
    return(
      <nav className={"nav_login_form"}>
        <form onSubmit={ this.handleSubmit }>
          <ul className="nav_buttons group">

            <li className="nav_signup">
              <Link to="/signup" className="sign_up">{ "Sign up" }</Link>
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
              placeholder="email"
              onChange={ this.update('email') }
              />
            <input
              type="password"
              value={ this.state.password }
              placeholder="Password"
              onChange={ this.update('password') } />

            <input
              type='submit'
              value='Log in to CheckMate' />
            { this.renderErrors() }
          </section>

        </form>
      </nav>
    );
  }
}

export default NavLogin;
