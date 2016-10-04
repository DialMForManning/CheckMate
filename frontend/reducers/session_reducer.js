import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return merge({}, state,{
        errors: action.errors
      });
    case LOGOUT:
      return merge({}, defaultState, {
        errors: action.errors
      });
    default:
    return state;
  }
};

export default SessionReducer;
