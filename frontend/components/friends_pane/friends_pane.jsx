import React from 'react';
import FriendsFilter from './friends_filter';
import FriendRequests from './friend_requests';

class FriendsPane extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchFriends();
  }

  render() {
    return (
        <content className="friends_pane">
          <h1 className="dash_header">Dashboard</h1>

          <FriendsFilter accepted={ this.props.accepted }/>
          <FriendRequests
            pending={ this.props.pending.concat(this.props.requests) }
            approveFriend={ this.props.approveFriend }
            denyFriend={ this.props.denyFriend } />
        </content>
    );
  }
};

export default FriendsPane;
