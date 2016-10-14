export const fetchAllComments = (friend_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/comments?friend_id=${friend_id}`,
    success,
    error
  });
};

export const postComment = (body, expense_id, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/expenses/${expense_id}/comments`,
    data: { body },
    success,
    error
  });
};

export const patchComment = (body, comment_id, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment_id}`,
    data: { body },
    success,
    error
  });
};

export const destroyComment = (comment_id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment_id}`,
    success,
    error
  });
};
