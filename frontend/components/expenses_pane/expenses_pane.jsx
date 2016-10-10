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
    this.friendId = this.props.params.id;
    this.props.fetchExpenses(this.friendId);
  }

  expenseList() {
    if (Object.keys(this.props.items).length === 0) { return []; }
    const that = this;
    return Object.keys(this.props.items).map((expense_id) => {
      return <ExpenseIndexItem
                key={ expense_id }
                expense={ that.props.items[expense_id] }
                friendId={ that.friendId } />
    });
  }

  render() {
    return (
      <content className="expenses_pane">
        <ul className="expense_list">{ this.expenseList() }</ul>

      </content>
    );
  }
}

export default ExpensesPane;
