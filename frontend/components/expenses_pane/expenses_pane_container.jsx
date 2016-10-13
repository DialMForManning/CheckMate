import { connect } from 'react-redux';
import { fetchFriend, createExpense,
  updateExpense, destroyExpense } from '../../actions/expenses_actions';
import { fetchTransactions,
         createTransaction,
         deleteTransaction } from '../../actions/transactions_actions';
import ExpensesPane from './expenses_pane';
import { withRouter } from 'react-router';

const mapStateToProps = ({ expenses, transactions }) => {
  return({
    items: expenses.items,
    friend: expenses.friend,
    balance: expenses.balance,
    transactions: expenses.transactions,
    errors: expenses.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchFriend: (friend_id) => dispatch(fetchFriend(friend_id)),
    createExpense: (expense, friend_id) => dispatch(createExpense(expense, friend_id)),
    updateExpense: (expense_id, expense) => dispatch(updateExpense(expense_id, expense)),
    destroyExpense: (expense_id, friend_id) => dispatch(destroyExpense(expense_id, friend_id)),
    fetchTransactions: () => dispatch(fetchTransactions()),
    createTransaction: (friend_id) => dispatch(createTransaction(friend_id)),
    deleteTransaction: (transaction_id) => dispatch(deleteTransaction(transaction_id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExpensesPane))
