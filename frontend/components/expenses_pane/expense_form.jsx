import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      total: '',
      friendOwes: '',
      error: ''
    };
    this.priceChecker = /^\$?[0-9]+(\.[0-9][0-9])?$/;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.checkPrice = this.checkPrice.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.description.length === 0) {
      this.setState({ error: 'Must include description'});
      return;
    }
    else if (!this.checkPrice(this.state.total) || !this.checkPrice(this.state.friendOwes)) {
      this.setState({ error: 'Invalid prices'});
      return;
    }
    else if (Number(this.state.friendOwes) > Number(this.state.total)) {
      this.setState({ error: `Friend doesn't owe more than you paid`} );
      return;
    }
    else {
      this.submitForm();
    }
  }

  submitForm() {
    const today = new Date().toJSON().slice(0, 10);

    const expense = {
      expense: {
        description: this.state.description,
      date: today,
      payer_id: window.currentUser.id,
      total: Number(this.state.total),
      payer_owes: this.state.total - this.state.friendOwes
    },
      shares: { [this.props.friend.id]: Number(this.state.friendOwes) }
    };

    this.props.createExpense(expense, this.props.friend.id);
    this.props.closeForm();
  }

  checkPrice(price) {
    if (!Number(price)) {
      return false;
    }
    else if (!this.priceChecker.test(price)) {
      return false;
    }
    else {
      return true;
    }
  }

  render() {
    return(
        <form className="expense_form" onSubmit={ this.handleSubmit }>
          <header className="add_expense_header">{ "Add an expense" }</header>
          <p>
            { `With you and ${this.props.friend.fname}`}
          </p>
          <input
            type="text"
            id="expense_form_description"
            placeholder="Description"
            value={ this.state.description }
            onChange={ this.update('description') } />
          <section className="money_input group">
            <label className="paid">{ "You paid: $" }
            <input
              type="text"
              placeholder="0.00"
              value={ this.state.total }
              onChange={ this.update('total') } />
            </label>

            <label className="leant">{ `${this.props.friend.fname} owes you: $` }
              <input
                type="text"
                placeholder="0.00"
                onChange={ this.update('friendOwes')} />
            </label>
          </section>
            <input
              type="submit"
              value="Add expense"
              onSubmit={ this.handleSubmit } />

            <p className="form_error">{ this.state.error }</p>
        </form>
    );
  }
}

export default ExpenseForm;
