export const fetchFriendDetails = (friend_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${friend_id}`,
    success,
    error
  });
};

export const reqCreateExpense = (expense, friend_id, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/expenses`,
    data: { expense: expense.expense,
            shares: expense.shares,
            friend_id: friend_id },
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

export const reqDestroyExpense = (id, friend_id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/expenses/${id}?friend_id=${friend_id}`,
    data: { friend_id: friend_id },
    success,
    error
  });
};

export const reqSettledExpenses = (friend_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/friends/${friend_id}/settled_expenses`,
    success: res => console.log(res),
    error
  });
};
