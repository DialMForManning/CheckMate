import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import ExpenseForm from './expense_form';
import DetailPane from '../detail_pane/detail_pane';

class ExpensesPane extends React.Component {
  constructor(props) {
    super(props);

    this.expenseList = this.expenseList.bind(this);
    this.handleSettle = this.handleSettle.bind(this);
    this.expensePaneButtons = this.expensePaneButtons.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.transactions) !== JSON.stringify(nextProps.transactions)) {
      this.props.fetchFriend(nextProps.params.id);
    }
    if (this.props.params.id === nextProps.params.id) {
      return;
    }
    this.props.fetchFriend(nextProps.params.id);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.params.id);
    this.props.fetchComments(this.props.params.id);
  }

  handleSettle() {
    let message = `Settle all expenses?`;
    if (this.props.balance > 0 ) {
      message = `Did you pay ${this.props.friend.fname}? This will settle all open expense shares.`;
    } else {
      message = `Did ${this.props.friend.fname} pay you? This will settle all open expense shares.`
    }

    const confirmed = window.confirm(message);

    if (confirmed) {this.props.createTransaction(this.props.friend.id)};
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
                deleteComment={ that.props.deleteComment } />
    });
  }

  expensePaneButtons() {
    if (this.props.balance) {
      return(
        <ul className="expense_pane_buttons">
          <li><button id="add_expense">{ "Add expense"}</button></li>
          <li>
            <button id="record_transaction" onClick={ this.handleSettle }>
              { "Record cash settlement"}
            </button>
          </li>
        </ul>
      )
    } else {
      return(
        <ul className="expense_pane_buttons">
          <li><button id="add_expense">{ "Add expense"}</button></li>
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
          <ExpenseForm
            friend={ this.props.friend }
            createExpense={ this.props.createExpense }/>
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
