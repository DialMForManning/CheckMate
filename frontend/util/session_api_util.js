export const requestSignup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
    success,
    error
  });
};

export const requestLogin = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user },
    success,
    error
  });
};

export const requestLogout = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    success,
    error
  });
};
