import React from 'react';
import App from './app';
import Splash from './splash/splash';
import Dashboard from './dashboard';
import SignupFormContainer from './signup_form/signup_form_container';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/dashboard');
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
  if (!store.getState().session.currentUser) {
    replace('/');
    }
  };

  return(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route
        path="/"
        component={ App }
        onEnter={ _redirectIfLoggedIn }>

        <IndexRoute component={ Splash } />

        <Route
          path="/signup"
          component={ SignupFormContainer }
          onEnter={ _redirectIfLoggedIn } />
      </Route>

      <Route
        path="/dashboard"
        component={ Dashboard }
        onEnter={ _redirectIfLoggedOut } />
    </Router>
  </Provider>
  );
};

export default Root;
