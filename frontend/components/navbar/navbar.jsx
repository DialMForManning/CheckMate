import React from 'react';
import NavLogin from './nav_login';
import AccountMenu from './account_menu';
import { Link, hashHistory } from 'react-router';

const Navbar = ({ currentUser, errors, logout, login, clearErrors }) => {
  const rightNav = () => {
    if(!!currentUser) {
      hashHistory.push("/dashboard");
      return <AccountMenu logout={ logout } currentUser={ currentUser }/>; }

    return <NavLogin
      login={ login }
      errors={ errors }
      clearErrors={ clearErrors }
      currentUser={ currentUser } />;
  };

  return(
    <header className="header">
      <nav className="navbar group">
          <Link to="/" className="logo">{ "CheckMate" }</Link>
          { rightNav() }
      </nav>
    </header>
  );
};

export default Navbar;
