import React from 'react';
import Modal from 'react-modal';
import confirmStyle from '../expenses_pane/confirm_style';

class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
    this.transactionList = this.transactionList.bind(this);
    this.transactionTag = this.transactionTag.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openTransConfirm = this.openTransConfirm.bind(this);
    this.closeTransConfirm = this.closeTransConfirm.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      transDeleteOpen: false,
      idToDelete: ''
    }
  }

  handleDelete(transactionId) {
    return (e) => {
      this.setState({ idToDelete: transactionId });
      this.openTransConfirm();
    }
  }

  delete() {
    this.props.deleteTransaction(this.state.idToDelete);
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
            <button onClick={ that.handleDelete(transaction.id) }>
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
          <strong className="paid_out">{ this.toDollars(amount) }</strong>
        </p>
      )
    }
  }

  toDollars(num) {
    return "$" + Number(num).toFixed(2);
  }

  openTransConfirm() {
    this.setState({ deleteTransConfirmOpen: true });
  }

  closeTransConfirm() {
    this.setState({ deleteTransConfirmOpen: false });
  }

  render() {
    return(
      <content className="transaction_history">
        <h3>{ "Transaction History" }</h3>
        <ul className="transaction_list">
          { this.transactionList() }
        </ul>

        <Modal
          isOpen={ this.state.deleteTransConfirmOpen }
          onRequestClose={ this.closeTransConfirm }
          style={ confirmStyle() } >
          <div className="transaction_delete_modal">
            <header className="form_header group">
              { "Delete transaction" }
              <aside onClick={ this.closeTransConfirm }>X</aside>
            </header>
            <p>{ `Are your sure you'd like to delete this? Deleting a
                  transaction will reopen all expense shares that
                  were settled when it was originally recorded.` }</p>
            <ul className="settle_buttons group">
              <li className="delete_transaction" onClick={ this.delete }>
                { "Delete" }
              </li>
              <li className="cancel_transaction_delete" onClick={ this.closeTransConfirm }>
                { "Cancel" }
              </li>
            </ul>
          </div>
        </Modal>
      </content>
    );
  }
}

export default TransactionHistory;
