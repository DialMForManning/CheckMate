import React from 'react';
import { Link } from 'react-router';

class FriendIndexItem extends React.Component {
  render() {
    return(
      <li>
        <Link to={ `/dashboard/friends/${this.props.id}` }>
          { this.props.fname + " " + this.props.lname }
        </Link>
      </li>
    );
  }
}

export default FriendIndexItem;
