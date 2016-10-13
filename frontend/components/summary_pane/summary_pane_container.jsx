import { connect } from 'react-redux';
import { fetchBalances } from '../../actions/balances_actions';
import SummaryPane from './summary_pane';

const mapStateToProps = ({ balances, friends }) => {
  return({
    balances: balances,
    accepted: friends.accepted
  });
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchBalances: () => dispatch(fetchBalances())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryPane)
