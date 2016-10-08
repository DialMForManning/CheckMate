import { connect } from 'react-redux';
import { fetchFriends, requestFriend,
  approveFriend, denyFriend } from '../../actions/friends_actions';
import FriendsPane from './friends_pane';

const mapStateToProps = ({ friends }) => {
  return({
    accepted: friends.accepted,
    pending: friends.pending,
    requests: friends.requests,
    errors: friends.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchFriends: () => dispatch(fetchFriends()),
    requestFriend: (friend) => dispatch(requestFriend(friend)),
    approveFriend: (friend) => dispatch(approveFriend(friend)),
    denyFriend: (friend) => dispatch(denyFriend(friend))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPane);
