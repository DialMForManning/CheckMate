import { FETCH_BALANCES, RECEIVE_BALANCES } from '../actions/balances_actions';
import { fetchBalances, receiveBalances } from '../actions/balances_actions';
import { fetchAllBalances } from '../util/balances_api_util';

export const BalancesMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
  const fetchSuccess = (balances) => dispatch(receiveBalances(balances));
  const error = (xhr) => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case FETCH_BALANCES:
      fetchAllBalances(fetchSuccess, error);
      return next(action);
    default:
      return next(action);
  }
}

export default BalancesMiddleWare;
