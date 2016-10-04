import { LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { requestLogin, requestLogout, requestSignup } from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  const success = (user) => { dispatch(receiveCurrentUser(user)) };
  const error = (xhr) => { dispatch(receiveErrors(xhr.responseJSON)) };

  switch(action.type) {
    case LOGIN:
      requestLogin(action.user, success, error);
      return next(action);
    case LOGOUT:
      requestLogout(() => next(action), error);
      break;
    case SIGNUP:
      requestSignup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
