import React from 'react';
import ExpenseIndexItem from './expense_index_item';

class ExpensesPane extends React.Component {
  constructor(props) {
    super(props);
    this.expenseList = this.expenseList.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.params.id === nextProps.params.id) {
      return;
    }

    this.friendId = nextProps.params.id;
    this.props.fetchExpenses(this.friendId);
  }

  componentDidMount() {
    this.props.fetchExpenses(this.props.params.id);
  }

  expenseList() {
    if (Object.keys(this.props.items).length === 0) { return []; }

    const that = this;

    return Object.keys(this.props.items).map((expense_id) => {
      return <ExpenseIndexItem
                key={ expense_id }
                expense={ that.props.items[expense_id] }
                friendId={ that.props.friendDetail.id } />
    });
  }

  render() {
    return (
      <content className="expenses_pane">
        <header className="expenses_header">
          <h1>
            { this.props.friendDetail.fname + " " +
            this.props.friendDetail.lname }
          </h1>
          <button>{ "Add expense"}</button>
        </header>
        <ul className="expense_list">{ this.expenseList() }</ul>

      </content>
    );
  }
}

export default ExpensesPane;
