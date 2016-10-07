import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FriendsMiddleware from './friends_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FriendsMiddleware
);

export default RootMiddleware;
