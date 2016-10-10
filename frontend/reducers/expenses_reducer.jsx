import {
  RECEIVE_EXPENSES,
  RECEIVE_SINGLE_EXPENSE,
  RECEIVE_DELETION,
  RECEIVE_EXPENSE_ERRORS
} from '../actions/expenses_actions';
import merge from 'lodash/merge';

const defaultState = {
  expenseItems: {},
  errors: []
};

const ExpensesReducer = ( state = defaultState, action ) => {
  switch(action.type) {
    case RECEIVE_EXPENSES:
      return merge({}, state, {
        expenseItems: action.expenses
      });
    case RECEIVE_SINGLE_EXPENSE:
      return merge({}, state, {
        expenseItems: {[action.expense.id]: action.expense}
      });
    case RECEIVE_DELETION:
      const newItems = merge({}, state.expenseItems);
      delete newItems[action.expense.id];
      return Object.assign({}, state, {
        expenseItems: newItems
      });
    case RECEIVE_EXPENSE_ERRORS:
      return Object.assign({}, state, {
        errors: action.errors
      });
    default:
      return state;
  }
};

export default ExpensesReducer;
