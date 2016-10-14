export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT_DELETION = "RECEIVE_COMMENT_DELETION";

export const fetchComments = (friend_id) => ({
  type: FETCH_COMMENTS,
  friend_id
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const  createComment = (body, expense_id) => ({
    type: CREATE_COMMENT,
    body,
    expense_id
});

export const receiveSingleComment = (comment) => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const updateComment = (body, comment_id) => ({
  type: UPDATE_COMMENT,
  body,
  comment_id
});

export const deleteComment = (comment_id) => ({
  type: DELETE_COMMENT,
  comment_id
});

export const receiveCommentDeletion = (comment) => ({
  type: RECEIVE_COMMENT_DELETION,
  comment
});
