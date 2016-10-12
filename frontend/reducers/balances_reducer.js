import { RECEIVE_BALANCES, receiveBalances } from '../actions/balances_actions';

const BalancesReducer = ( state = {}, action ) => {
  switch(action.type) {
    case RECEIVE_BALANCES:
      return action.balances;
    default:
      return state;
  }
};

export default BalancesReducer;
