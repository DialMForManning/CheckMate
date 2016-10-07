# Redux Structure

The application's state is organized by data type. Under each data type, there may be sub-states. Each action is listed with the sequence of events that results from its invocation, ending with the API or a reducer. Subscribed components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with where it was invoked, through the **API**/**reducer** involved, and finally to the **components** that update as a result. Once you start implementing your Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

- `signup`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST api/users` is called
  0. `receiveCurrentUser` is set as the success callback

- `login`
  0. invoked from `LoginDropdownForm` or `LoginForm` `onSubmit`
  0. `POST /api/session` is called
  0. `receiveCurrentUser` is set as the callback

- `logout`
  0. invoked from `NavBar` `onClick`
  0. `DELETE /api/session` is called
  0. `removeCurrentUser` is set as the success callback

- `fetchCurrentUser`
  0. invoked from `App` in `componentDidMount`
  0. `GET /api/session` is called
  0. `receiveCurrentUser` is set as the success callback

### Session API Response Actions

- `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state

- `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state

### Error Cycles

- `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped as arrays of strings in their respective forms

- `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state

## Friend Cycles

### Friendship API Request Actions

- `fetchFriends`
  0. invoked from `FriendsIndex` in `componentDidMount`
  0. `GET /api/friends` is called
  0. `receiveFriends` is set as the success callback

- `createFriendship`
  0. invoked from add friend button `onClick`
  0. `POST /api/friends` is called
  0. `receiveSingleFriend` is set as the success callback

- `approveFriendship`
  0. invoked from approve friend button `onClick`
  0. `PATCH /api/friendships` is called
  0. `receiveSingleFriend` is set as the success callback

- `denyFriendship`
  0. invoked from deny friend button 'onClick'
  0. `DELETE /api/friendships` is called
  0. `receiveSingleFriend` is set as the success callback

### Friendship API Response Actions

- `receiveFriends`
  0. invoked from the API success callback for `fetchFriends`
  0. the `FriendReducer` updates `friends` in the application state

- `receiveSingleFriend`
  0. invoked from the API success callback for `createFriendship`, `approveFriendship`, or `denyFriendship`
  0. the `FriendReducer` adds a `friend` to the `friends` array in the application state

## Expenses Cycles

### Expenses API Request Actions

- `fetchAllExpenses`
  0. invoked from `ExpensesIndex` in `componentDidMount`
  0. `GET /api/friends/:id/expenses` is called
  0. `recieveAllExpenses` is set as the success callback.

- `createExpense`
  0. invoked from `ExpenseForm` `onSubmit`
  0. `POST /api/expenses/` is called
  0. `receiveSingleExpense` is set as the success callback

- `fetchSingleExpense`
  0. invoked from `ExpenseIndexItem` `onClick`
  0. `GET /api/expenses/:id` is called
  0. `receiveSingleExpense` is set as the success callback

- `updateExpense`
  0. invoked from `ExpenseForm` `onSubmit`
  0. `PATCH /api/expenses/:id` is called
  0. `receiveSingleExpense` is set as the success callback

- `destroyExpense`
  0. invoked from delete expense button `onClick`
  0. `DELETE /api/expenses/:id` is called
  0. `removeExpense` is set as the success callback

### Expenses API Response Actions

- `receiveAllExpenses`
  0. invoked from API success callback for `fetchAllExpenses`
  0. the `ExpenseReducer` updates `expenses` in the application state

-  `receiveSingleExpense`
  0. invoked from API success callback for `createExpense` or `fetchSingleExpense`
  0. the `ExpenseReducer` updates or adds an `expense_item` in `expenses` in the application state

- `removeExpense`
  0. invoked from API success callback for `destroyExpense`
  0. the `ExpenseReducer` removes an `expense_item` from `expenses` in the application state

## Transactions Cycles

### Transactions API Request Actions

- `fetchAllTransactions`
  0. invoked from `ExpensesIndex` in `componentDidMount`
  0. `GET /api/friends/:id/transactions` is called
  0. `recieveAllTransactions` is set as the success callback.

- `createTransaction`
  0. invoked from `TransactionForm` `onSubmit`
  0. `POST /api/friends/:id/transactions` is called
  0. `receiveSingleTransaction` is set as the success callback.

- `updateTransaction`
  0. invoked from `TransactionForm` `onSubmit`
  0. `PATCH /api/transactions/:id` is called
  0. `receiveSingleTransaction` is set as the success callback

- `destroyTransaction`
  0. invoked from delete transaction button `onClick`
  0. `DELETE /api/transactions/:id` is called
  0. `removeTransaction` is set as the success callback

## Transactions API Response Actions

- `receiveAllTransactions`
  0. invoked from API success callback for `fetchAllTransactions`
  0. the `TransactionReducer` updates `transactions` in the application state

-  `receiveSingleTransaction`
  0. invoked from API success callback for `createTransaction`
  0. the `TransactionReducer` updates or adds an `transaction_item` in `transactions` in the application state

- `removeTransaction`
  0. invoked from API success callback for `destroyTransaction`
  0. the `TransactionReducer` removes an `transaction_item` from `transactions` in the application state

## Comments Cycles

### Comments API Request Actions

- `fetchComments`
  0. invoked from `ExpenseIndexItem` `onClick`
  0. `GET /api/expenses/:id/comments` is called
  0. `receiveComments` is set as the success callback

- `createComment`
  0. invoked from post button in `CommentForm` `onSubmit`
  0. `POST /api/expenses/:id/comments` is called
  0. `receiveSingleComment` is set as the success callback

- `destroyComment`
  0. invoked from delete button in `CommentIndexItem` `onClick`
  0. `DELETE /api/comments/:id` is called
  0. `removeComment` is set as the success callback

### Comments API Response Actions

- `receiveComments`
  0. invoked from API success callback for `fetchComments`
  0. the `CommentReducer` adds an array of `comments` to the application state

-  `receiveSingleComment`
  0. invoked from API success callback for `createComment`
  0. the `CommentReducer` adds a comment to the `comments` array in the application state

- `removeComment`
  0. invoked from API success callback for `destroyComment`
  0. the `CommentReducer` adds a comment to the `comments` array in the application state
