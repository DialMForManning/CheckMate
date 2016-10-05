import React from 'react';
import App from './app.jsx';
import Splash from './splash/splash';
import SignupFormContainer from './signup_form/signup_form_container';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Splash } />

        <Route path="/signup" component={ SignupFormContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
