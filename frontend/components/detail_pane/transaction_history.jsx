import React from 'react';

class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.transactionList = this.transactionList.bind(this);
    this.transactionTag = this.transactionTag.bind(this);
  }

  transactionList() {
    const that = this;
    return Object.keys(this.props.transactions).map((transaction_id) => {
      const transaction = that.props.transactions[transaction_id];
      return(
        <li key={ transaction.id }>
          <h6>
            { this.transactionTag(transaction.creditor_id) }
            <strong>{ that.toDollars(transaction.amount) }</strong>
          </h6>
          <aside>{ transaction.date }</aside>
        </li>
      )
    });
  }

  transactionTag(creditor_id) {
    if (creditor_id === window.currentUser.id) {
      return(
        <p className="got_paid">
          { this.props.fname + " paid you " }
        </p>
      )
    } else {
      return(
        <p className="paid_out">
          { "you paid " + this.props.fname }
        </p>
      )
    }
  }

  toDollars(num) {
    return "$" + Number(num).toFixed(2);
  }

  render() {
    return(
      <content className="transaction_history">
        <h3>{ "Transaction History" }</h3>
        <ul className="transaction_list">
          { this.transactionList() }
        </ul>
      </content>
    );
  }
}

export default TransactionHistory;
