# CheckMate

[Heroku link][heroku] **Note:** Insert link to production site here.

## Minimum Viable Product

CheckMate is a web application inspired by Splitwise built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Friending
- [ ] Expenses
- [ ] Transaction History
- [ ] Comments
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Friendship Model, API, and components (2 days)

**Objective** Friends can be added, read, edited, and destroyed
through the API. Friends are searchable.

- [ ] `Friendship` model
- [ ] Seed database with a small amount of test friendship data
- [ ] CRUD API for friendships (`FriendshipController`)
- [ ] JBuilder views for friendships
- Friendship components and respective Redux loops
  - [ ] `FriendshipsIndex`
  - [ ] `FriendshipIndexItem`
  - [ ] `FriendshipForm`
- [ ] Friends list style
- [ ] Searching friends by name
- [ ] Seed friendships

### Phase 3: Expenses (2 days)

**Objective** Shared expenses between friends can be created, read,
edited, and destroyed through the API. Expenses default to a 50/50 split, but the user can choose to divide the total cost based on exact amounts, percentage, shares, or reimbursement.

- [ ] `Expense` model
- [ ] Seed database with a small amount of test expenses data
- [ ] CRUD API for expenses (`ExpenseController`)
- [ ] JBuilder views for expenses
- [ ] Expense components and respective Redux loops
  - [ ] `ExpensesIndex`
  - [ ] `ExpenseIndexItem`
  - [ ] `ExpenseForm`
- [ ] Expense list style
- [ ] Seed expenses

### Phase 4: Transaction History (1 day)

**Objective** Transactions between friends can be recorded. Transactions are included in the expense index. Transactions for the full debt amount will settle all active expenses. Any settled expenses are marked as such and default hidden from the expense index. Transactions less than the full debt amount will not settle expenses.

- [ ] `Transaction` model
- [ ] Seed database with a small amount of transaction data
- [ ] CRUD API for recording of cash transactions (`TransactionController`)
- [ ] JBuilder views for Transactions
- [ ] Transaction components and respective redux loops
  - [ ] `TransactionsIndex`
  - [ ] `TransactionIndexItem`
  - [ ] `TransactionForm`
- [ ] Transaction list style
  - [ ] Very similar to expense index style so they can easily be integrated
- [ ] Seed transactions

### Phase 5: Comments (1 day)

**Objective** Comments can be added to expenses if the user is involved with that expense. A transaction will automatically add a comment to each settled expense "NAME settled this expense on MM/DD/YYYY" (or X days ago).

- [ ] `Comment` model
- [ ] Seed database with a  small amount of comments
- [ ] CRUD API for Comments (`CommentController`)
- [ ] JBuilder views for comments
- [ ] Comment components and respective redux loops
  - [ ] `CommentsIndex`
  - [ ] `CommentIndexItem`
  - [ ] `CommentForm`
- [ ] Comment list style
- [ ] Seed comments

Bonus Features (TBD)
- [ ] Itemized expenses
- [ ] Transaction type icons
- [ ] Non-cash transactions using the Venmo API that are automatically recorded
- [ ] Groups: share expenses between more than 2 users and simplify debts
- [ ] Recent activity
