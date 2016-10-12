import React from 'react';

class AccountMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="account_menu group">
        <button onClick={ this.props.logout } className='logoutbutton'>Logout</button>
        <h3>{ window.currentUser.fname + " " + window.currentUser.lname }</h3>
      </section>
    );
  }
}

export default AccountMenu;
