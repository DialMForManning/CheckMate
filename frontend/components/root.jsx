import React from 'react';
<<<<<<< HEAD
import App from './App.jsx';
=======
import App from './app.jsx';
>>>>>>> usersauth
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
