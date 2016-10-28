export const fetchAllTransactions = (friend_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/friends/${friend_id}/transactions`,
    success,
    error
  });
};

export const reqCreateTransaction = (friend_id, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/friends/${friend_id}/transactions`,
    success,
    error
  });
};

export const reqDeleteTransaction = (transaction_id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/transactions/${transaction_id}`,
    success,
    error
  });
};
