export const FETCH_FRIEND = "FETCH_FRIEND";
export const RECEIVE_FRIEND_DETAILS = "RECEIVE_FRIEND_DETAILS";
export const CREATE_EXPENSE = "CREATE_EXPENSE";
export const UPDATE_EXPENSE = "UPDATE_EXPENSE";
export const DESTROY_EXPENSE = "DESTROY_EXPENSE";
export const RECEIVE_SINGLE_EXPENSE = "RECEIVE_SINGLE_EXPENSE";
export const RECEIVE_DELETION = "RECEIVE_DELETION";
export const RECEIVE_EXPENSE_ERRORS = "RECEIVE_EXPENSE_ERRORS";

export const fetchFriend = (friend_id) => ({
  type: FETCH_FRIEND,
  friend_id
});

export const receiveFriendDetails = (friend) => ({
  type: RECEIVE_FRIEND_DETAILS,
  friend
});

export const createExpense = (expense, friend_id) => ({
  type: CREATE_EXPENSE,
  expense,
  friend_id
});

export const updateExpense = (expense_id, expense) => ({
  type: UPDATE_EXPENSE,
  expense_id,
  expense
});

export const destroyExpense = (expense_id, friend_id) => ({
  type: DESTROY_EXPENSE,
  expense_id,
  friend_id
});

export const receiveSingleExpense = (expense) => ({
  type: RECEIVE_SINGLE_EXPENSE,
  expense
});

export const receiveDeletion = (expense) => ({
  type: RECEIVE_DELETION,
  expense
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_EXPENSE_ERRORS,
  errors
});
