import { connect } from 'react-redux';
import { fetchExpenses, createExpense,
  updateExpense, destroyExpense } from '../../actions/expenses_actions';
import ExpensesPane from './expenses_pane';
import { withRouter } from 'react-router';

const mapStateToProps = ({ expenses }) => {
  return({
    items: expenses.items,
    errors: expenses.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchExpenses: (friend_id) => dispatch(fetchExpenses(friend_id)),
    createExpense: (expense) => dispatch(createExpense(expense)),
    updateExpense: (expense_id, expense) => dispatch(updateExpense(expense_id, expense)),
    destroyExpense: (expense_id) => dispatch(destroyExpense(expense_id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExpensesPane))
