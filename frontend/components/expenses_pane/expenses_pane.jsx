import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import ExpenseForm from './expense_form';
import DetailPane from '../detail_pane/detail_pane';
import Modal from 'react-modal';
import expenseFormStyle from './expense_form_style';
import confirmStyle from './confirm_style';

class ExpensesPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenseFormOpen: false,
      settleConfirmOpen: false,
      expenseDeleteOpen: false,
      idToDelete: ''
    }

    this.expenseList = this.expenseList.bind(this);
    this.expensePaneButtons = this.expensePaneButtons.bind(this);
    this.settleForm = this.settleForm.bind(this);
    this.handleSettle = this.handleSettle.bind(this);
    this.openExpenseDelete = this.openExpenseDelete.bind(this);
    this.deleteExpenseForm = this.deleteExpenseForm.bind(this);
    this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.transactions) !== JSON.stringify(nextProps.transactions)) {
      this.props.fetchFriend(nextProps.params.id);
    }
    if (this.props.params.id === nextProps.params.id) {
      return;
    }
    this.props.fetchFriend(nextProps.params.id);
    this.props.fetchComments(nextProps.params.id);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.params.id);
    this.props.fetchComments(this.props.params.id);
  }

  showForm(type) {
    return (e) => this.setState( { [type]: true })};

  closeForm(type) {
    return (e) => this.setState( { [type]: false });
  }

  settleForm() {
    let settleMessage;
    if (Number(this.props.balance) > 0) {
      settleMessage = `Did ${this.props.friend.fname} really pay you?
      Recording this transaction will close all open expenses (don't
      worry, you can delete it later if you want to).`
    } else {
      settleMessage = `This will settle all open expenses. Did you
      really pay ${this.props.friend.fname}? Remember, they can delete
      this transaction if you didn't.`
    }

    return(
      <div className="settle_modal">
        <header className="form_header group">
          { "Record cash settlement" }
          <aside onClick={ this.closeForm("settleConfirmOpen") }>X</aside>
        </header>
        <p>{ settleMessage }</p>
        <ul className="settle_buttons group">
          <li className="settle"
            onClick={ this.handleSettle }>
            { "Settle" }
          </li>
          <li className="cancel_settle" onClick={ this.closeForm("settleConfirmOpen") }>
            { "Cancel" }
          </li>
        </ul>
      </div>
    )
  }

  handleSettle() {
    debugger
    this.closeForm("settleConfirmOpen")();
    this.props.createTransaction(this.props.friend.id);
  }

  openExpenseDelete(expenseId) {
    return (e) => {
      this.setState({
        expenseDeleteOpen: true,
        idToDelete: expenseId });
    }
  }

  handleDeleteExpense() {
    this.props.destroyExpense(this.state.idToDelete, this.props.friend.id);
    this.closeForm("expenseDeleteOpen")();
  }

  focusAddExpense() {
    document.getElementById("expense_form_description").focus();
  }

  deleteExpenseForm() {
    return(
      <div className="transaction_delete_modal">
        <header className="form_header group">
          { "Delete transaction" }
          <aside onClick={ this.closeForm("expenseDeleteOpen") }>X</aside>
        </header>
          <p>
            { `Are your sure you want to delete this expense? This
            will affect all users associated with the expense.` }
            </p>
        <ul className="settle_buttons group">
          <li className="delete_transaction"
            onClick={ this.handleDeleteExpense }>
          { "Delete" }
          </li>
          <li className="cancel_transaction_delete" onClick={ this.closeForm("expenseDeleteOpen") }>
          { "Cancel" }
          </li>
        </ul>
      </div>
    )
  }

  expenseList() {
    if (!this.props.items) { return <h4>{"Settled up!"}</h4>; }

    const that = this;
    return Object.keys(this.props.items).map((expense_id) => {

      return <ExpenseIndexItem
                key={ expense_id }
                expense={ that.props.items[expense_id] }
                friendId={ that.props.params.id }
                destroyExpense={ that.props.destroyExpense }
                comments={ that.props.comments[expense_id] }
                createComment={ that.props.createComment }
                updateComment={ that.props.updateComment }
                deleteComment={ that.props.deleteComment }
                openExpenseDelete= { that.openExpenseDelete } />
    });
  }

  expensePaneButtons() {
    if (this.props.balance) {
      return(
        <ul className="expense_pane_buttons">
          <li>
            <button
              onClick={ this.showForm("expenseFormOpen") }
              id="add_expense">
                { "Add expense"}
            </button>
          </li>
          <li>
            <button id="record_transaction" onClick={ this.showForm("settleConfirmOpen") }>
              { "Record cash settlement"}
            </button>
          </li>
        </ul>
      )
    } else {
      return(
        <ul className="expense_pane_buttons">
        <li>
          <button
            onClick={ this.showForm("expenseFormOpen") }
            id="add_expense">
              { "Add expense"}
          </button>
        </li>
        </ul>
      )
    };
  }

  render() {
    if (Object.keys(this.props.friend).length === 0 ||
        this.props.friend.id !== Number(this.props.params.id)) {
      return(
        <content className="expenses_pane"></content>
      );
    }

    return (
      <content className="expenses_pane">
        <header className="expenses_header">
          <h1>
            { this.props.friend.fname + " " +
            this.props.friend.lname }
          </h1>
          {this.expensePaneButtons()}

          <Modal
            isOpen={ this.state.settleConfirmOpen }
            onRequestClose={ this.closeForm("settleConfirmOpen") }
            style={ confirmStyle() } >
            { this.settleForm() }
          </Modal>

          <Modal
            isOpen={ this.state.expenseDeleteOpen }
            onRequestClose={ this.closeForm("expenseDeleteOpen") }
            style={ confirmStyle() } >
            { this.deleteExpenseForm() }
          </Modal>

          <Modal
            isOpen={ this.state.expenseFormOpen }
            onRequestClose={ this.closeForm("expenseFormOpen") }
            onAfterOpen={ this.focusAddExpense }
            style={ expenseFormStyle() }>

            <ExpenseForm
              friend={ this.props.friend }
              createExpense={ this.props.createExpense }
              closeExpenseForm={ this.closeForm("expenseFormOpen") }/>
          </Modal>

        </header>
        <ul className="expense_list">{ this.expenseList() }</ul>
        <DetailPane
          balance={ this.props.balance }
          fname={ this.props.friend.fname }
          transactions={ this.props.transactions }
          deleteTransaction={ this.props.deleteTransaction }/>
      </content>
    );
  }
}

export default ExpensesPane;
