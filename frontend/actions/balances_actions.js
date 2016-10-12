export const FETCH_BALANCES = "FETCH_BALANCES";
export const RECEIVE_BALANCES = "RECEIVE_BALANCES";

  export const fetchBalances = () => ({
    type: FETCH_BALANCES
  });

  export const receiveBalances = (balances) => ({
    type: RECEIVE_BALANCES,
    balances
  });
