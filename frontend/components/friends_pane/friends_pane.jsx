import React from 'react';
import FriendsFilter from './friends_filter';
import FriendRequests from './friend_requests';
import UserSearch from './user_search'

class FriendsPane extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchFriends();
  }

  componentDidMount() {
    const detailToggler = (e) => {
      if (e.target.className === "expense_description"){
        $(e.currentTarget).find(".expense_detail").toggle();
      }
    };

    $(document).on('click', '.expense_item', detailToggler );
    $(document).on('click', '#add_expense', function(e) {
      $(".expense_form").toggle();
    });
  }

  render() {
    return (
        <content className="friends_pane">
          <h1 className="dash_header">Dashboard</h1>

          <FriendsFilter accepted={ this.props.accepted }
            receiveFriendDetail={ this.props.receiveFriendDetail }/>
          <FriendRequests
            pending={ this.props.pending.concat(this.props.requests) }
            approveFriend={ this.props.approveFriend }
            denyFriend={ this.props.denyFriend } />
          <UserSearch
            users={ this.props.users }
            requestFriend={ this.props.requestFriend }
            searchUsers={ this.props.searchUsers }/>
        </content>
    );
  }
};

export default FriendsPane;
