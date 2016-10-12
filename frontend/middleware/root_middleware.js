import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FriendsMiddleware from './friends_middleware';
import ExpensesMiddleWare from './expenses_middleware';
import BalancesMiddleWare from './balances_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FriendsMiddleware,
  ExpensesMiddleWare,
  BalancesMiddleWare
);

export default RootMiddleware;
