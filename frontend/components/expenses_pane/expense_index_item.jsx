import React from 'react';
import CommentField from './comment_field';

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.expense = this.props.expense;
    this.monthNum = this.expense.date.split("-")[1];
    this.dayNum = this.expense.date.split("-")[2];
    this.year = this.expense.date.split("-")[0];
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
    this.expenseDetail = this.expenseDetail.bind(this);
    this.sharesDetail = this.sharesDetail.bind(this);
  }

  toggleDetail(e) {
    if (e.target.className === "expense_description"){
        $(e.currentTarget).find(".expense_detail").toggle();
      }
  }

  expenseSummary() {
    if (this.expense.payer_id === window.currentUser.id) {
      return(
        <ul className="loan_summary">
          <li className="payer_summary">
            <h5>{ "you paid" }</h5>
            <h6>
              { this.toDollars(this.expense.total) }
            </h6>
          </li>
          <li className="user_leant_summary">
            <h5>{ "you lent " +
              this.expense.shares[this.props.friendId].debtorFname }
            </h5>
            <h6>
              { Number(this.expense.shares[this.props.friendId].payerLeant).toFixed(2) }
            </h6>
          </li>
          <button
            onClick={ this.props.openExpenseDelete(this.props.expense.id) }>
            { `X` }
          </button>
        </ul>
      );
    } else {
      return(
      <ul className="loan_summary">
        <li className="payer_summary">
          <h5>{ this.expense.payerFname + " paid" }</h5>
          <h6>{ this.toDollars(this.expense.total) }</h6>
        </li>
        <li className="user_debt_summary">
          <h5>{ this.expense.payerFname +
            " lent you" }
          </h5>
          <h6>
            { this.toDollars(this.expense.shares[window.currentUser.id].payerLeant) }
          </h6>
        </li>
        <button onClick={ this.deleteExpense }>{ `X` }</button>
      </ul>
    );
    }
  }

  toDollars(num) {
    return "$" + Number(num).toFixed(2);
  }

  expenseDetail() {
    return(
      <section className="expense_detail">
        <content className="expense_detail_header">
          <h1>{ this.expense.description }</h1>
          <h2>{ this.toDollars(this.expense.total) }</h2>
          <p>{ `Added by ${this.expense.payerFname} on
            ${this.months[this.monthNum]} ${ this.dayNum }, ${ this.year }` }
          </p>
        </content>
        <content className="expense_share_detail group">
          <ul className="shares_list">
            <li>
              { `${this.expense.payerFname} paid
              ${this.toDollars(this.expense.total)} and owes
              ${this.toDollars(this.expense.payer_owes)}` }
            </li>
            { this.sharesDetail() }
          </ul>
          <CommentField
            comments={ this.props.comments }
            createComment={ this.props.createComment }
            updateComment={ this.props.updateComment }
            deleteComment={ this.props.deleteComment }
            expense={ this.expense }/>
        </content>
      </section>
    );
  }

  sharesDetail() {
    const shareKeys = Object.keys(this.expense.shares);
    return shareKeys.map((key) => {
      return(
      <li key={ key }>
        { `${this.expense.shares[key].debtorFname} owes
        ${this.toDollars(this.expense.shares[key].payerLeant)}` }
      </li>
    );
    })
  }

  render() {
    return(
      <li
      onClick={ this.toggleDetail }
      className="expense_item">
        <section className="expense_summary group">

            <h3 className="expense_date">
              { this.months[this.monthNum] }
              <strong>{ this.dayNum }</strong>
            </h3>
            <p

            className="expense_description">
              { this.expense.description }
            </p>
            { this.expenseSummary() }
        </section>
        { this.expenseDetail() }
      </li>
    );
  }
}

export default ExpenseIndexItem;
