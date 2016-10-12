import React from 'react';

class DetailPane extends React.Component {
  constructor(props) {
    super(props);
    this.balanceDollars = this.balanceDollars.bind(this);
    this.friendName = this.friendName.bind(this);
  }

  balanceDollars() {
    if ( Number(this.props.balance) < 0 ) {
      return (
        <strong className="in_debt">
          { this.friendName() }
          { this.toDollars(this.props.balance) }
        </strong>
      );
    } else if ( Number(this.props.balance) > 0) {
      return(
        <strong className="has_credit">
          { this.friendName() }
          { this.toDollars(this.props.balance) }
        </strong>
      );
    } else {
      return(
        <strong className="settled_balance">
          { this.friendName() }
          { this.toDollars(this.props.balance) }
        </strong>
      );
    }
  }

  toDollars(num) {
    return Number(num).toFixed(2)
  }

  friendName() {
    return <h4>{ `You owe ${this.props.fname}`}</h4>;
  }

  render() {
    if (!this.props.balance) { return <h1></h1>; }

    return(
      <content className="detail_pane">
        <h3>{ "YOUR BALANCE" }</h3>
        <strong>{ this.balanceDollars() }</strong>
      </content>
    );
  }
};

export default DetailPane;
