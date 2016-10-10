export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const CREATE_EXPENSE = "CREATE_EXPENSE";
export const UPDATE_EXPENSE = "UPDATE_EXPENSE";
export const DESTROY_EXPENSE = "DESTROY_EXPENSE";
export const RECEIVE_SINGLE_EXPENSE = "RECEIVE_SINGLE_EXPENSE";
export const RECEIVE_DELETION = "RECEIVE_DELETION";
export const RECEIVE_EXPENSE_ERRORS = "RECEIVE_EXPENSE_ERRORS";

export const fetchExpenses = (friend_id) => ({
  type: FETCH_EXPENSES,
  friend_id
});

export const receiveExpenses = (expenses) => ({
  type: RECEIVE_EXPENSES,
  expenses
});

export const createExpense = (expense) => ({
  type: CREATE_EXPENSE,
  expense
});

export const updateExpense = (expense_id, expense) => ({
  type: UPDATE_EXPENSE,
  expense_id,
  expense
});

export const destroyExpense = (expense_id) => ({
  type: DESTROY_EXPENSE,
  expense_id
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
