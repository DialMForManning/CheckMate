import React from 'react';

class CommentField extends React.Component {
  constructor(props) {
    super(props);
    this.commentList = this.commentList.bind(this);
  }

  commentEditButtons(author_id, comment_id) {
    if (author_id === window.currentUser.id ) {
      return (
        <ul className="comment_edit_buttons group">
          <li className="delete_comment"
              onClick={ this.handleDelete(comment_id) }>
              X
          </li>
          <li className="edit_comment">✎</li>
        </ul>
      );
    };
  }

  handleDelete(comment_id) {
    return (e) => this.props.deleteComment(comment_id);
  }

  commentList(comments) {
    if (!comments || comments.length === 0) { return []; }
    const that = this;
    return comments.map((comment) => {
      return (
        <li key={ comment.id }>

          <div>
           <label>{ comment.author.fname + ": " }</label>
           { comment.body }
           { that.commentEditButtons(comment.author.id, comment.id) }
          </div>
        </li>
      );
    })
  }

  render() {
    return (
      <content className="comment_field">
        <h3>{"Comments"}</h3>
        <ul className="comment_list">
          { this.commentList(this.props.comments) }
        </ul>
      </content>
    );
  }
}

export default CommentField;
