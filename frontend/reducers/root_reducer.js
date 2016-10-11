import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendsReducer from './friends_reducer';
import ExpensesReducer from './expenses_reducer';
import FriendDetailReducer from './friend_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendsReducer,
  expenses: ExpensesReducer,
  friendDetail: FriendDetailReducer
});

export default RootReducer;
