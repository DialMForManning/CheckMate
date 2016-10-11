import React from 'react';
import FriendIndexItem from './friend_index_item';

class FriendsFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  handleInput(e) {
    this.setState({query: e.currentTarget.value});
  }

  matches() {
    if (!this.props.accepted) { return []; }

    if (this.state.query.length === 0) {
        return this.props.accepted;
      }

      const matches = [];
      const query = this.state.query;
      this.props.accepted.forEach((friend) => {
        let name = friend.fname + " " + friend.lname;

        if (name.toLowerCase().includes(query.toLowerCase())) {
          matches.push(friend);
        }
      });

      return matches;
  }

  filteredList() {
    let filtered = this.matches().map((friend, idx) => {
      return(
        <FriendIndexItem
          key = { idx }
          fname={ friend.fname }
          lname={ friend.lname }
          id={ friend.id }
          receiveFriendDetail={ this.props.receiveFriendDetail }
           />
      );
    });

    return filtered;
  }

  render() {
    return(
      <div className="friend_filter">
        <input
          type="text"
          placeholder="Filter by name"
          onChange={ this.handleInput }/>

        <h1>Friends</h1>
        <ul className="friend_list">
          { this.filteredList() }
        </ul>
      </div>
    );
  }
}

export default FriendsFilter;
