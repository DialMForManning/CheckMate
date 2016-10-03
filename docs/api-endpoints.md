# API Endpoints

## HTML API

### Root

- `GET /`
  * loads React web app
- `GET /dashboard`
  * redirects to auth form if not signed in
- `GET /signup`
- `GET /login`
- `GET /friends/:id`
  * redirects to auth form if not signed in

## JSON API

### Users

- `POST /api/users`
  * Accepts: username, password, fname, lname
- `GET /api/users`
  * Accepts: friends_boolean

### Session
- `POST /api/session`
  * Accepts: username, password
- `DELETE /api/session`

### Expenses
- `GET /api/expense/:id`
- `GET /api/expenses`
  * Accepts: friend_id
- `POST /api/expenses/`
  * Accepts: friend_id, current_user_paid_boolean, current_user_owed, total, description
- `PATCH /api/expense/:id`
* Accepts: current_user_paid_boolean, current_user_owed, total, description
- `DELETE /api/expense/:id`

### Transactions
- `GET /api/transaction/:id`
- `GET /api/transactions/`
  * Accepts: friend_id
- `POST /api/transactions/`
  * Accepts: friend_id, current_user_paid_boolean, amount
- `PATCH /api/transaction/:id`
  * Accepts: current_user_paid_boolean, amount
- `DELETE /api/transaction/:id`

### Comments
- `GET /api/comments/`
  * Accepts: expense_id
- `POST /api/comments`
  * Accepts: expense_id, body
- `PATCH /api/comment/:id`
  * Accepts: body
- `DELETE /api/comment/id`
