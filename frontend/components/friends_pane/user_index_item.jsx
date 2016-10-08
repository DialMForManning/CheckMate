import React from 'react';

const UserIndexItem = ({ user, requestFriend }) => {
  const sendRequest = () => {
    requestFriend(user)
  }

  return(
    <ul>
      <li>{ user.fname + " " + user.lname }</li>
      <li onClick={ sendRequest }>{ "Request Friend" }</li>
    </ul>
  );
};

export default UserIndexItem;
