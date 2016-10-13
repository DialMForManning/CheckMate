import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import ExpenseForm from './expense_form';
import DetailPane from '../detail_pane/detail_pane';

class ExpensesPane extends React.Component {
  constructor(props) {
    super(props);

    this.expenseList = this.expenseList.bind(this);
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
  }

  expenseList() {
    if (!this.props.items) { return []; }

    const that = this;
    return Object.keys(this.props.items).map((expense_id) => {
      return <ExpenseIndexItem
                key={ expense_id }
                expense={ that.props.items[expense_id] }
                friendId={ that.props.params.id }
                destroyExpense={ that.props.destroyExpense } />
    });
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
          <ul className="expense_pane_buttons">
            <li><button id="add_expense">{ "Add expense"}</button></li>
            <li><button id="record_transaction">{ "Record cash settlement"}</button></li>
          </ul>
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
