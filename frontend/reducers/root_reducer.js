import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendsReducer from './friends_reducer';
import ExpensesReducer from './expenses_reducer';
import BalancesReducer from './balances_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendsReducer,
  expenses: ExpensesReducer,
  balances: BalancesReducer,
  comments: CommentsReducer
});

export default RootReducer;
