import { RECEIVE_FRIENDS,
         RECEIVE_SINGLE_FRIEND,
         RECEIVE_APPROVED_FRIEND,
         RECEIVE_DENIED_FRIEND,
         RECEIVE_ERRORS,
         CLEAR_ERRORS } from '../actions/friends_actions';
import merge from 'lodash/merge';

const defaultState = {
  accepted: [],
  pending: [],
  requests: [],
  errors: []
};

const FriendsReducer = ( state = defaultState, action ) => {
  switch(action.type) {
    case RECEIVE_FRIENDS:
      return {
        accepted: action.friends.filter((friend) => {
          return friend.status === 'accepted';
        }),
        pending: action.friends.filter((friend) => {
          return friend.status === 'pending';
        }),
        requests: action.friends.filter((friend) => {
          return friend.status === 'requested';
        }),
        errors: []
      };

    case RECEIVE_SINGLE_FRIEND:
      return merge({}, state, { pending: [action.friend] });

    case RECEIVE_APPROVED_FRIEND:
      return Object.assign({}, state, {
        requests: state.requests.filter((friend) => {
          return friend.id !== action.friend.id;
        }),
        accepted: state.accepted.concat(action.friend)
      });

    case RECEIVE_DENIED_FRIEND:
      return Object.assign({}, state, {
        requests: state.requests.filter((friend) => {
          return friend.id !== action.friend.id;
        }),
        accepted: state.accepted.filter((friend) => {
          return friend.id !== action.friend.id;
        })
      });

    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });

    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: []});

    default:
      return state;
  }
};

export default FriendsReducer;
