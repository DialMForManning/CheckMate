import React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>

      </Route>
    </Router>
  </Provider>
);

export default Root;
