import React from 'react';
import NavLogin from './nav_login';

const Navbar = ({ currentUser, errors, logout, login }) => {
  return(
    <header className="header">
      <nav className="navbar group">
          <h1 className="logo">CheckMate</h1>
          <NavLogin login={ login } errors={ errors } />
      </nav>
    </header>
  );
};

export default Navbar;
