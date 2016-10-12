import React from 'react';
import NavLogin from './nav_login';
import AccountMenu from './account_menu';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.rightNav = this.rightNav.bind(this);
  }

  rightNav() {
    if(window.location.hash.startsWith("#/friends") ||
       window.location.hash.startsWith("#/dashboard")) {
      return <AccountMenu
              logout={ this.props.logout }
              currentUser={ this.props.currentUser }/>;
    }

    return <NavLogin
      login={ this.props.login }
      errors={ this.props.errors }
      clearErrors={ this.props.clearErrors }
      currentUser={ this.props.currentUser } />;
  }

  componentDidMount() {
    $(document).on('click', '.expense_item', function(e) {
      $(e.currentTarget).find(".expense_detail").toggle();
    });
    $(document).on('click', '#add_expense', function(e) {
      $(".expense_form").toggle();
    });
  }

  render() {
    return(
      <header className="header">
      <nav className="navbar group">
      <Link to="/" className="logo">{ "CheckMate" }</Link>
      { this.rightNav() }
      </nav>
      </header>
    );
  }
}

export default Navbar;
