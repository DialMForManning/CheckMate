export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const CREATE_EXPENSE = "CREATE_EXPENSE";
export const DESTROY_EXPENSE = "DESTROY_EXPENSE";
export const RECEIVE_SINGLE_EXPENSE = "RECEIVE_SINGLE_EXPENSE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchExpenses = () => ({
  type: FETCH_EXPENSES
});

export const receiveExpenses = (expenses) => ({
  type: RECEIVE_EXPENSES,
  expenses
});

export const createExpense = (expense) => ({
  type: CREATE_EXPENSE,
  expense
});

export const destroyExpense = (expense) => ({
  type: DESTROY_EXPENSE,
  expense
});

export const receiveSingleExpense = (expense) => ({
  type: RECEIVE_SINGLE_EXPENSE,
  expense
});

export const receiveErrors = () => ({
  type: RECEIVE_ERRORS
});
