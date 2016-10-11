import { LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { requestLogin, requestLogout, requestSignup } from '../util/session_api_util';
import { hashHistory } from 'react-router';

const SessionMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  const success = (user) => {
    dispatch(receiveCurrentUser(user));
    window.currentUser = user;
    hashHistory.push("/dashboard")
  };

  const logoutsuccess = () => {
    hashHistory.push("/");
   };

  const error = (xhr) => { dispatch(receiveErrors(xhr.responseJSON)) };

  switch(action.type) {
    case LOGIN:
      requestLogin(action.user, success, error);
      return next(action);
    case LOGOUT:
      requestLogout(logoutsuccess, logoutsuccess, error);
      return next(action);
    case SIGNUP:
      requestSignup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
