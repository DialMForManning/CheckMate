export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const RECEIVE_SINGLE_TRANSACTION = "RECEIVE_SINGLE_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const RECEIVE_TRANSACTION_DELETION = "RECEIVE_TRANSACTION_DELETION";

export const fetchTransactions = () => ({
  type: FETCH_TRANSACTIONS
});

export const receiveTransactions = (transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

export const createTransaction = (friend_id) => ({
  type: CREATE_TRANSACTION,
  friend_id
});

export const receiveSingleTransaction = (transaction) => ({
  type: RECEIVE_SINGLE_TRANSACTION,
  transaction
});

export const deleteTransaction = (transaction_id) => ({
  type: DELETE_TRANSACTION,
  transaction_id
});

export const receiveTransactionDeletion = (transaction) => ({
  type: RECEIVE_TRANSACTION_DELETION,
  transaction
});
