import { RECEIVE_FRIEND_DETAIL,
         receiveFriendDetail } from '../actions/friend_detail_actions';

const defaultState = {};

const FriendDetailReducer = ( state = defaultState, action ) => {
  switch(action.type) {
    case RECEIVE_FRIEND_DETAIL:
      return action.friendDetail;
    default:
      return state;
  }
};

export default FriendDetailReducer;
