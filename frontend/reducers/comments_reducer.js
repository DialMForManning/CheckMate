import { RECEIVE_COMMENTS,
         RECEIVE_SINGLE_COMMENT,
         RECEIVE_COMMENT_DELETION } from '../actions/comments_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_SINGLE_COMMENT:
      return merge({}, state, {
        [action.comment.expense_id]: state[action.comment.expense_id].concat([action.comment])
      });
    case RECEIVE_COMMENT_DELETION:
      let newComments = merge([], state[action.comment.expense_id]);
      newComments = newComments.filter((comment) => {
        return comment.id !== action.comment.id;
      });
      return Object.assign({}, state, {
        [action.comment.expense_id]: newComments
      });
    default:
      return state;
  }
};

export default CommentsReducer;
