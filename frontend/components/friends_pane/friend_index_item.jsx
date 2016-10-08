import React from 'react';

class FriendIndexItem extends React.Component {
  render() {
    return(
      <li>
        { this.props.fname + " " + this.props.lname }
      </li>
    );
  }
}

export default FriendIndexItem;
