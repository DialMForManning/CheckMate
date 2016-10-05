import React from 'react';
import NavLogin from './nav_login';
import { Link } from 'react-router';

const Navbar = ({ currentUser, errors, logout, login }) => {
  return(
    <header className="header">
      <nav className="navbar group">
          <Link to="/" className="logo">{ "CheckMate" }</Link>
          <NavLogin login={ login } errors={ errors } />
      </nav>
    </header>
  );
};

export default Navbar;
