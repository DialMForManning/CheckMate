import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>CheckMate</h1>, root);
});

//test imports and invocations
import { requestLogin, requestSignup, requestLogout } from './util/session_api_util';
window.requestLogin = requestLogin;
window.requestSignup = requestSignup;
window.requestLogout = requestLogout;
window.goodlogin = {username: 'test', password: 'testing'};
window.gooduser = {username: 'willywonka', password: 'pureimagination', fname: 'willy', lname: 'wonka'};
window.baduser1 = {username: 'sirrus', password: 'art', fname: 'sirrus'};
window.baduser2 = {username: 'sirrus', password: 'redpages'};
window.success = (user) => {
  console.log(user);
};

window.errors = (errors) => {console.log(errors);};
