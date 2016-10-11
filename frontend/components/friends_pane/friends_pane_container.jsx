import { connect } from 'react-redux';
import { fetchFriends, requestFriend, searchUsers,
  approveFriend, denyFriend } from '../../actions/friends_actions';
import { receiveFriendDetail } from '../../actions/friend_detail_actions';
import FriendsPane from './friends_pane';

const mapStateToProps = ({ friends }) => {
  return({
    accepted: friends.accepted,
    pending: friends.pending,
    requests: friends.requests,
    users: friends.users,
    errors: friends.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchFriends: () => dispatch(fetchFriends()),
    requestFriend: (friend) => dispatch(requestFriend(friend)),
    approveFriend: (friend) => dispatch(approveFriend(friend)),
    denyFriend: (friend) => dispatch(denyFriend(friend)),
    searchUsers: (query) => dispatch(searchUsers(query)),
    receiveFriendDetail: (friendDetail) => dispatch(receiveFriendDetail(friendDetail))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPane);
