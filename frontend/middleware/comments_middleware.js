import { FETCH_COMMENTS,
         CREATE_COMMENT,
         UPDATE_COMMENT,
         DELETE_COMMENT,
         receiveComments,
         receiveSingleComment,
         receiveCommentDeletion } from '../actions/comments_actions';
import { fetchAllComments,
         postComment,
         patchComment,
         destroyComment } from '../util/comments_api_util';

const CommentsMiddleWare = ({ getState, dispatch }) => (next) => (action) => {
  const fetchSuccess = (comments) => dispatch(receiveComments(comments));
  const saveSuccess = (comment) => dispatch(receiveSingleComment(comment));
  const deleteSuccess = (comment) => dispatch(receiveCommentDeletion(comment));

  switch(action.type) {
    case FETCH_COMMENTS:
      fetchAllComments(action.friend_id, fetchSuccess, error);
      return next(action);
    case CREATE_COMMENT:
      postComment(action.body, action.expense_id, saveSuccess, error);
      return next(action);
    case UPDATE_COMMENT:
      patchComment(action.body, action.comment_id, saveSuccess, error);
      return next(action);
    case DELETE_COMMENT:
      destroyComment(action.comment_id, deleteSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentsMiddleWare;
