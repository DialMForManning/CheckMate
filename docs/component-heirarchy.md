##Component Heirarchy

**HomeContainer**
- NavBar
- DashboardContainer
- AuthFormContainer

**AuthFormContainer**
- SignupForm
- LoginForm

**NavBar**
- NavLogo
- LoginDropdownForm

**DashboardContainer**
- FriendBar
- ExpensePaneContainer
- DetailBar
  * DebtDetail
- ExpenseFormContainer
- TransactionFormContainer

**FriendBar**
- DashLogo
- SearchForm
- FriendsIndex
 * FriendIndexItem

**ExpensePaneContainer**
- PaneTitle
- BalanceBar
- DebtTable
  * OweItem
  * OwedItem
- ExpenseIndex
  * ExpenseIndexItem
    + ExpenseDetail
    + CommentsIndex
      - CommentsIndexItem
    + CommentForm

**ExpenseFormContainer**
- ExpenseForm

**TransactionFormContainer**
- TransactionForm

  ## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/dashboard" | "DashboardContainer" |
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/friends/:id" | "ExpensePaneContainer" |
