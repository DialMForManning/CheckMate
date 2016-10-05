import React from 'react';
import App from './app.jsx';
import Splash from './splash/splash';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Splash } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
