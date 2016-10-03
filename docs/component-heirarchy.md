##Component Heirarchy

**HomeContainer**
- NavBar
- DashboardContainer
- AuthFormContainer

**AuthFormContainer**
- AuthForm

**NavBar**
- NavLogo
- AuthDropdownForm

**DashboardContainer**
- FriendBar
- ExpensePaneContainer
- DetailBar
  * DebtDetail
- AddBillFormContainer

**FriendBar**
- DashLogo
- SearchForm
- FriendIndex
 * FriendIndexItem

**ExpensePaneContainer**
- PaneTitle
  * AddBillButton
  * SettleUpButton
- BalanceBar
- DebtTable
  * OweColumn
    + OweRow
  * OwedColumn
    + OwedRow
- ExpenseIndex
  * ExpenseIndexItem

**AddBillFormContainer**
- AddBillForm
  * ChoosePayerForm
  * SplitOptionsForm

  ## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/dashboard" | "DashboardContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/friends/:id" | "ExpensePaneContainer" |
