import {  FETCH_FRIEND,
         CREATE_EXPENSE,
         UPDATE_EXPENSE,
         DESTROY_EXPENSE } from '../actions/expenses_actions';
import { receiveFriendDetails,
         createExpense,
         updateExpense,
         destroyExpense,
         receiveSingleExpense,
         receiveDeletion,
         receiveErrors } from '../actions/expenses_actions';
import { fetchFriendDetails,
         reqCreateExpense,
         reqUpdateExpense,
         reqDestroyExpense } from '../util/expenses_api_util';

const ExpensesMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
  const saveSuccess = (expense) => dispatch(receiveSingleExpense(expense));
  const destroySuccess = (expense) => dispatch(receiveDeletion(expense));
  const friendSuccess = (friend) => dispatch(receiveFriendDetails(friend));
  const error = (xhr) => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_FRIEND:
      fetchFriendDetails(action.friend_id, friendSuccess, error)
      return next(action);
    case CREATE_EXPENSE:
      reqCreateExpense(action.expense, action.friend_id, saveSuccess, error);
      return next(action);
    case UPDATE_EXPENSE:
      reqUpdateExpense(action.expense_id, action.expense, saveSuccess, error);
      return next(action);
    case DESTROY_EXPENSE:
      reqDestroyExpense(action.expense_id, action.friend_id, destroySuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ExpensesMiddleWare;
