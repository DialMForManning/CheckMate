import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FriendsMiddleware from './friends_middleware';
import ExpensesMiddleWare from './expenses_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FriendsMiddleware,
  ExpensesMiddleWare
);

export default RootMiddleware;
