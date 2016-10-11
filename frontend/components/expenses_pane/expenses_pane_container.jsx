import { connect } from 'react-redux';
import { fetchFriend, createExpense,
  updateExpense, destroyExpense } from '../../actions/expenses_actions';
import ExpensesPane from './expenses_pane';
import { withRouter } from 'react-router';

const mapStateToProps = ({ expenses, friends, friendDetail }) => {
  return({
    items: expenses.items,
    friend: expenses.friend,
    accepted: friends.accepted,
    errors: expenses.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchFriend: (friend_id) => dispatch(fetchFriend(friend_id)),
    createExpense: (expense) => dispatch(createExpense(expense)),
    updateExpense: (expense_id, expense) => dispatch(updateExpense(expense_id, expense)),
    destroyExpense: (expense_id) => dispatch(destroyExpense(expense_id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExpensesPane))
