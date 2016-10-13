import { RECEIVE_TRANSACTIONS,
         RECEIVE_SINGLE_TRANSACTION,
         RECEIVE_TRANSACTION_DELETION,
         receiveTransactions,
         receiveSingleTransaction,
         receiveTransactionDeletion } from '../actions/transactions_actions';

const TransactionsReducer = ( state = {}, action ) => {
  switch(action.type) {
    case RECEIVE_TRANSACTIONS:

      return action.transactions;
    case RECEIVE_SINGLE_TRANSACTION:
      return Object.assign({}, state, {
        [action.transaction.id]: action.transaction
      });
    case RECEIVE_TRANSACTION_DELETION:
      const newTransactions = Object.assign({}, state);
      delete newTransactions[action.id];
      return newTransactions;
    default:
      return state;
  }
};

export default TransactionsReducer;
