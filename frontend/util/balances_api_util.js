export const fetchAllBalances = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/balances',
    success,
    error
  });
};
