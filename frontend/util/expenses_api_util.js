export const fetchAllExpenses = (friend_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/friends/${friend_id}/expenses`,
    success,
    error
  });
};

export const reqCreateExpense = (expense, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/expenses`,
    data: { expense: expense.expense,
            shares: expense.shares },
    success,
    error
  });
};

export const reqUpdateExpense = (id, expense, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/expenses/${id}`,
    data: { expense: expense.expense,
            shares: expense.shares },
    success,
    error
  });
};

export const reqDestroyExpense = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/expenses/${id}`,
    success,
    error
  });
};
