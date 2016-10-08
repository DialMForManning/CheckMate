import React from 'react';

const UserIndexItem = ({ user, requestFriend }) => {
  const sendRequest = () => {
    requestFriend(user)
  }

  return(
    <ul>
      <li className="search_name">{ user.fname + " " + user.lname }</li>
      <li onClick={ sendRequest } className="req_button">
        { "+add" }
      </li>
    </ul>
  );
};

export default UserIndexItem;
