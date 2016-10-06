import React from 'react';

const AccountMenu = ({ logout, currentUser }) => {
  console.log(logout);
  return(
    <section className="account_menu group">
      <button onClick={ logout } className='logoutbutton'>Logout</button>
      <h3>{ currentUser.fname }</h3>
    </section>
  );
};

export default AccountMenu;
