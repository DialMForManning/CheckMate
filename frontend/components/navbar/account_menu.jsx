import React from 'react';

const AccountMenu = ({ logout, currentUser }) => {
  return(
    <section className="account_menu group">
      <button onClick={ logout } className='logoutbutton'>Logout</button>
      <h3>{ currentUser.fname + " " + currentUser.lname }</h3>
    </section>
  );
};

export default AccountMenu;
