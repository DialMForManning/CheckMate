import { FETCH_TRANSACTIONS,
         CREATE_TRANSACTION,
         DELETE_TRANSACTION,
         fetchTransactions,
         receiveTransactions,
         createTransaction,
         receiveSingleTransaction,
         deleteTransaction,
         receiveTransactionDeletion } from '../actions/transactions_actions';
import { fetchAllTransactions,
         reqCreateTransaction,
         reqDeleteTransaction } from '../util/transactions_api_util';

const TransactionsMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
  const fetchSuccess = (transactions) => dispatch(receiveTransactions(transactions));
  const createSuccess = (transaction) => {dispatch(receiveSingleTransaction(transaction))};
  const deleteSuccess = (transaction) => { dispatch(receiveTransactionDeletion(transaction)) };
  const error = (xhr) => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_TRANSACTIONS:
      fetchAllTransactions(action.friend_id, fetchSuccess, error)
      return next(action);
    case CREATE_TRANSACTION:
      reqCreateTransaction(action.friend_id, createSuccess, error);
      return next(action);
    case DELETE_TRANSACTION:
      reqDeleteTransaction(action.transaction_id, deleteSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TransactionsMiddleWare;
