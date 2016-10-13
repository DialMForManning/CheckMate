import React from 'react';
import TransactionHistory from './transaction_history';

class DetailPane extends React.Component {
  constructor(props) {
    super(props);
    this.balanceDollars = this.balanceDollars.bind(this);
    this.friendName = this.friendName.bind(this);
    this.transactionHistory = this.transactionHistory.bind(this);
  }

  balanceDollars() {
    if ( Number(this.props.balance) < 0 ) {
      return (
        <strong className="in_debt">
          { this.friendName("debt") }
          <h4>{ "$" + this.toDollars(this.props.balance * -1) }</h4>
        </strong>
      );
    } else if ( Number(this.props.balance) > 0) {
      return(
        <strong className="has_credit">
          { this.friendName("loan") }
          <h4>{ "$" + this.toDollars(this.props.balance) }</h4>
        </strong>
      );
    } else {
      return(
        <strong className="settled_balance">
          <h4>{ this.toDollars(this.props.balance) }</h4>
        </strong>
      );
    }
  }

  toDollars(num) {
    return Number(num).toFixed(2)
  }

  friendName(balance) {
    switch(balance) {
      case "debt":
        return <h6>{ `You owe ${this.props.fname}`}</h6>;
      case "loan":
        return <h6>{ `${this.props.fname} owes you`}</h6>;
    }
  }

  transactionHistory() {
    if (this.props.transactions) {
      return(
        <TransactionHistory
        transactions={ this.props.transactions}
        fname={ this.props.fname }
        deleteTransaction={ this.props.deleteTransaction } />
      )
    }
  }

  render() {
    if (!this.props.balance) { return <h1></h1>; }
    return(
      <content className="detail_pane">
        <h3>{ "YOUR BALANCE" }</h3>
        { this.balanceDollars() }
        { this.transactionHistory() }
      </content>
    );
  }
};

export default DetailPane;
