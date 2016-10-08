import React from 'react';
import RequestsItem from './request_item';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  allRequests() {
    return this.props.pending.map((friend, idx) => {
      return <RequestsItem
        friend={ friend }
        key={ idx }
        approveFriend={ this.props.approveFriend }
        denyFriend={ this.props.denyFriend } />;
    });
  }

  render() {
    return(
      <div className="friend_requests">
        <h1>Pending Friends</h1>
        { this.allRequests() }
      </div>
    );
  }
}

export default FriendRequests;
