import React from 'react';
import NavLogin from './nav_login';
import AccountMenu from './account_menu';
import { Link } from 'react-router';

const Navbar = ({ currentUser, errors, logout, login, clearErrors }) => {
  const rightNav = () => {
    if(!!currentUser) { return <AccountMenu logout={ logout } currentUser={ currentUser }/>; }

    return <NavLogin login={ login } errors={ errors } clearErrors={ clearErrors } />;
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
