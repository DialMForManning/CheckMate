import React from 'react';
import NavLogin from './nav_login';

const Navbar = ({ currentUser, logout}) => {
  return(
    <header className="header">
      <nav className="navbar group">
          <h1 className="logo">CheckMate</h1>
          <NavLogin />
      </nav>
    </header>
  );
};

export default Navbar;
