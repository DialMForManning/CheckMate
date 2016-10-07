import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

//test imports and invocations
import { requestFriend, approveFriend, denyFriend,
  fetchFriends, receiveFriends, receiveSingleFriend,
  receiveErrors, clearErrors } from './actions/friends_actions';

window.requestFriend = requestFriend;
window.approveFriend = approveFriend;
window.denyFriend = denyFriend;
window.fetchFriends = fetchFriends;
window.receiveFriends = receiveFriends;
window.receiveSingleFriend = receiveSingleFriend;
window.receiveErrors = receiveErrors;
window.clearErrors = clearErrors;
