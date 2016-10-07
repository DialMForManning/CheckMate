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
import { fetchFriends, requestFriendship, approveFriendship, denyFriendship } from './util/friends_api_util';
window.fetchFriends = fetchFriends;
window.requestFriendship = requestFriendship;
window.approveFriendship = approveFriendship;
window.denyFriendship = denyFriendship;

window.success = (friends) => {
  console.log(friends);
};

window.errors = (errors) => {console.log(errors);};
