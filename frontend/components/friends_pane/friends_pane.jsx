import React from 'react';
import FriendsFilter from './friends_filter';

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
        </content>
    );
  }
};

export default FriendsPane;
