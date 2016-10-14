import React from 'react';

class CommentField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "Add",
      body: "",
      commentId: 0,
      error: ""
    }
    this.commentList = this.commentList.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFieldType = this.toggleFieldType.bind(this);
  }

  handleDelete(comment_id) {
    return (e) => this.props.deleteComment(comment_id);
  }

  handleInput(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length > 140) {
      this.setState({ error: "comment too long" });
    } else if (this.state.formType === "Add") {
      this.props.createComment(this.state.body, this.props.expense.id )
      this.setState({ body: "", error: "", fieldType: "Add" })
    } else if (this.state.formType === "Edit") {
      this.props.updateComment(this.state.body, this.state.commentId)
      this.setState({ body: "", error: "", fieldType: "Add" })
    }

  }

  toggleFieldType(comment_body, comment_id) {
    return (e) => this.setState({ body: comment_body,
                                  formType: "Edit",
                                  commentId: comment_id });
  }

  commentEditButtons(author_id, comment_id, comment_body) {
    if (author_id === window.currentUser.id ) {
      return (
        <ul className="comment_edit_buttons group">
          <li className="delete_comment"
              onClick={ this.handleDelete(comment_id) }>
              X
          </li>
          <li
          className="edit_comment"
          onClick={ this.toggleFieldType(comment_body, comment_id) }>
            ✎
          </li>
        </ul>
      );
    };
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
           { that.commentEditButtons(comment.author.id, comment.id, comment.body) }
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
        <form
          className="comment_form"
          onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Add a comment"
            onChange={ this.handleInput }
            value={ this.state.body } />

          <input
            type="submit"
            value={ this.state.formType } />
        </form>
        <p className="comment_error">{ this.state.error }</p>
      </content>
    );
  }
}

export default CommentField;
