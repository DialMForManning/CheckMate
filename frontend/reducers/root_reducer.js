import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendsReducer from './friends_reducer';
import ExpensesReducer from './expenses_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendsReducer,
  expenses: ExpensesReducer
});

export default RootReducer;
