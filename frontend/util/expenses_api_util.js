export const fetchExpenses = (friend_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/friends/${friend_id}/expenses`,
    success,
    error
  });
};

export const createExpense = (expense, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/expenses`,
    data: { expense: expense.expense,
            shares: expense.shares },
    success,
    error
  });
};

export const updateExpense = (id, expense, shares, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/expenses/${id}`,
    data: { expense: expense.expense,
            shares: expense.shares },
    success,
    error
  });
};

export const destroyExpense = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/expenses/${id}`,
    success,
    error
  });
};
