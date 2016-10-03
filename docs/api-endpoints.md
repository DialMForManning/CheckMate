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

### Friends
- `GET /api/friends`
- `POST /api/friends`
  * Accepds: friend_id
- `DELETE /api/friends/:id`

### Expenses
- `GET /api/expense/:id`
- `GET /api/friends/:id/expenses`
- `POST /api/friends/:id/expenses`
  * Accepts: current_user_paid_boolean, current_user_owed, total, description, date
- `PATCH /api/expense/:id`
* Accepts: current_user_paid_boolean, current_user_owed, total, description
- `DELETE /api/expense/:id`

### Transactions
- `GET /api/transactions/:id`
- `GET /api/friends/:id/transactions`
- `POST /api/friends/:id/transactions`
  * Accepts: current_user_paid_boolean, amount
- `PATCH /api/transactions/:id`
  * Accepts: current_user_paid_boolean, amount
- `DELETE /api/transactions/:id`

### Comments
- `GET /api/expenses/:id/comments`
  * Accepts: expense_id
- `POST /api/expenses/:id/comments`
  * Accepts: expense_id, body
- `DELETE /api/comment/id`
