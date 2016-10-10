import { FETCH_EXPENSES,
         CREATE_EXPENSE,
         UPDATE_EXPENSE,
         DESTROY_EXPENSE } from '../actions/expenses_actions';
import { fetchExpenses,
         receiveExpenses,
         createExpense,
         updateExpense,
         destroyExpense,
         receiveSingleExpense,
         receiveDeletion,
         receiveErrors } from '../actions/expenses_actions';
import { fetchAllExpenses,
         reqCreateExpense,
         reqUpdateExpense,
         reqDestroyExpense } from '../util/expenses_api_util';

const ExpensesMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
  const fetchSuccess = (expenses) => dispatch(receiveExpenses(expenses));
  const saveSuccess = (expense) => dispatch(receiveSingleExpense(expense));
  const destroySuccess = (expense) => dispatch(receiveDeletion(expense));
  const error = (xhr) => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_EXPENSES:
      fetchAllExpenses(action.friend_id, fetchSuccess, error)
      return next(action);
    case CREATE_EXPENSE:
      reqCreateExpense(action.expense, saveSuccess, error);
      return next(action);
    case UPDATE_EXPENSE:
      reqUpdateExpense(action.expense_id, action.expense, saveSuccess, error);
      return next(action);
    case DESTROY_EXPENSE:
      reqDestroyExpense(action.expense_id, destroySuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ExpensesMiddleWare;
