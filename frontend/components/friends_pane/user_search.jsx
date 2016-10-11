import React from 'react';
import UserIndexItem from './user_index_item';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname_query: "",
      lname_query: "",
    };
    this.gatherUsers = this.gatherUsers.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  gatherUsers(e) {
    e.preventDefault();
    this.props.searchUsers({
      fname_query: this.state.fname_query,
      lname_query: this.state.lname_query
    });
  }

  renderUsers() {
    const that = this;
    return this.props.users.map((user) => {
      return <UserIndexItem
        key={ user.id }
        user={ user }
        requestFriend={ that.props.requestFriend } />;
    });
  }

  render() {
    return (
      <div className="user_search">
        <h1>{ "User Search" }</h1>
        <form onSubmit={ this.gatherUsers }>
          <input
            type="text"
            placeholder="First Name"
            onChange = { this.update('fname_query') }
             />
           <input
             type="text"
             placeholder="Last Name"
             onChange = { this.update('lname_query') }
             />
           <input type='submit' value="Search!"/>
       </form>

       <ul>{ this.renderUsers() }</ul>
       <p>{ this.error }</p>
      </div>
    );
  }
}

export default UserSearch;
