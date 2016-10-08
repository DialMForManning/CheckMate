import React from 'react';

class RequestItem extends React.Component {
  constructor(props) {
    super(props);
    this.sendApprove = this.sendApprove.bind(this);
    this.sendDeny = this.sendDeny.bind(this);
  }

  sendApprove() {
    this.props.approveFriend(this.props.friend);
  }

  sendDeny() {
    this.props.denyFriend(this.props.friend);
  }

  render(){
    const friend = this.props.friend;

    let name = friend.fname;

    if (friend.lname) { name +=  " " + friend.lname; }

    if (friend.status === 'requested') {
      return(
        <ul>
          <li className="req_name">{ name }</li>
          <li className="approve_friend"
            onClick={ this.sendApprove }>
            { "✓" }
          </li>
          <li className="deny_friend"
              onClick={ this.sendDeny }>
              { "X" }
          </li>
        </ul>
      );
    }

    return(
      <ul className="pending_friend">
        <li className="pending_name">{ name }</li>
      </ul>
    );
  }
}

export default RequestItem;
