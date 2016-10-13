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
import{ deleteTransaction } from './actions/transactions_actions';
window.deleteTransaction = deleteTransaction;

import{ fetchFriend, fetchExpenses, createExpense, updateExpense, destroyExpense } from './actions/expenses_actions';
window.fetchFriend = fetchFriend;
window.fetchExpenses = fetchExpenses;
window.createExpense = createExpense;
window.updateExpense = updateExpense;
window.destroyExpense = destroyExpense;
window.success = (res) => console.log(res);
window.error = (error) => console.log(error);
window.goodExpense = {
  expense: {
    description: 'Wonka Bars',
    date: '2016-10-05',
    payer_id: 276,
    total: 20,
    payer_owes: 5
  },
  shares: {
    281: 5,
    282: 5,
    279: 5
  }
};

window.goodUpdate = {
  expense: {
    description: 'Wonka Bars',
    date: '2016-10-05',
    payer_id: 276,
    total: 25,
    payer_owes: 5
  },
  shares: {
    281: 5,
    282: 5,
    279: 5,
    280: 5
  }
};

window.badExpense = {
  expense: {
    description: 'Wonka Bars',
    date: '2016-10-05',
    payer_id: 276,
    total: 20.66666,
    payer_owes: 5
  },
  shares: {
    281: 5,
    282: 5,
    279: 5
  }
};
