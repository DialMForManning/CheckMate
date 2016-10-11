import React from 'react';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.expense = this.props.expense;
    this.monthNum = this.expense.date.split("-")[1];
    this.dayNum = this.expense.date.split("-")[2];
    this.months = {
      "01": "JAN",
      "02": "FEB",
      "03": "MAR",
      "04": "APR",
      "05": "MAY",
      "06": "JUN",
      "07": "JUL",
      "08": "AUG",
      "09": "SEP",
      "10": "OCT",
      "11": "NOV",
      "12": "DEC"
    };
    this.expenseSummary = this.expenseSummary.bind(this);
  }

  expenseSummary() {
    if (this.expense.payer_id === window.currentUser.id) {
      return(
        <ul className="loan_summary">
          <li className="payer_summary">
            <h5>{ "you paid" }</h5>
            <h6>
              { "$" + Number(this.expense.total).toFixed(2) }
            </h6>
          </li>
          <li className="user_leant_summary">
            <h5>{ "you lent " +
              this.expense.shares[this.props.friendId].debtorFname }
            </h5>
            <h6>
              { "$" + Number(this.expense.shares[this.props.friendId].payerLeant).toFixed(2) }
            </h6>
          </li>
        </ul>
      );
    } else {
      return(
      <ul className="loan_summary">
        <li className="payer_summary">
          <h5>{ this.expense.payerFname + " paid" }</h5>
          <h6>{ "$" + Number(this.expense.total).toFixed(2) }</h6>
        </li>
        <li className="user_debt_summary">
          <h5>{ this.expense.payerFname +
            " lent you" }</h5>
          <h6>
            { "$" + Number(this.expense.shares[window.currentUser.id].payerLeant).toFixed(2) }
          </h6>
        </li>
      </ul>
    );
    }
  }

  render() {
    return(
      <li className="expense_item group">
        <h3 className="expense_date">
          { this.months[this.monthNum] }
          <strong>{ this.dayNum }</strong>
        </h3>
        <p className="expense_description">
          { this.expense.description }
        </p>
        { this.expenseSummary() }
      </li>
    );
  }
}

export default ExpenseIndexItem;
