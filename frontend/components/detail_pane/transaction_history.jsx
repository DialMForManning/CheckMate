import React from 'react';

class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.transactionList = this.transactionList.bind(this);
    this.transactionTag = this.transactionTag.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(gotPaid, transaction_id) {
    return (e) => {
      let message = `Delete transaction?`;
      if (gotPaid) {
        message = `Delete transaction? I guess ${this.props.fname} lied about paying up.`;
      } else {
        message = `Delete transaction? I wouldn't suggest this if you already paid up.`
      }

      const confirmed = window.confirm(message);

      if (confirmed) {this.props.deleteTransaction(transaction_id)};
    }
  }

  transactionList() {
    const that = this;
    return Object.keys(this.props.transactions).map((transaction_id) => {
      const transaction = that.props.transactions[transaction_id];
      const gotPaid = (transaction.creditor_id === window.currentUser.id);
      return(
        <li key={ transaction.id } className="group">
          <h6 className="group">
            { this.transactionTag(gotPaid, transaction.amount) }
            <button onClick={ that.handleDelete(gotPaid, transaction.id) }>
              { "X" }
            </button>
          </h6>
          <aside>{ "on " + transaction.date }</aside>
        </li>
      )
    });
  }

  transactionTag(gotPaid, amount) {
    if (gotPaid) {
      return(
        <p>
          { this.props.fname + " paid you " }
          <strong className="got_paid">{ this.toDollars(amount) }</strong>
        </p>
      )
    } else {
      return(
        <p>
          { "you paid " + this.props.fname }
          <strong lassName="paid_out">{ this.toDollars(amount) }</strong>
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
