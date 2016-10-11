import React from 'react';
import { Link } from 'react-router';

class FriendIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.sendDetails = this.sendDetails.bind(this);
  }
  sendDetails() {
    const friendDetail = {
      fname: this.props.fname,
      lname: this.props.lname,
      id: this.props.id
    };

    this.props.receiveFriendDetail(friendDetail);
  }

  render() {
    return(
      <li>
        <Link to={ `/friends/${this.props.id}` }
          onClick={ this.sendDetails }>
          { this.props.fname + " " + this.props.lname }
        </Link>
      </li>
    );
  }
}

export default FriendIndexItem;
