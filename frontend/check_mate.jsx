import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); //for testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

import configureStore from './store/store';
//test imports and invocations
import { login, logout, signup } from './actions/session_actions';
// window.requestLogin = requestLogin;
// window.requestSignup = requestSignup;
// window.requestLogout = requestLogout;
// window.login = login;
// window.logout = logout;
// window.signup = signup;
// window.goodlogin = {username: 'test', password: 'testing'};
// window.gooduser = {username: 'willywonka', password: 'pureimagination', fname: 'willy', lname: 'wonka'};
// window.baduser1 = {username: 'sirrus', password: 'art', fname: 'sirrus'};
// window.baduser2 = {username: 'sirrus', password: 'redpages'};
window.success = (user) => {
  console.log(user);
};

window.errors = (errors) => {console.log(errors);};
