import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendsReducer from './friends_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendsReducer
});

export default RootReducer;
