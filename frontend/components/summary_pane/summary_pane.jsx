import React from 'react';
import DetailPane from '../detail_pane/detail_pane';

class SummaryPane extends React.Component {
  constructor(props) {
    super(props);
    this.allBalances = this.allBalances.bind(this);
  }

  componentDidMount() {
    this.props.fetchBalances();
  }

  allBalances() {
    if (this.props.accepted.length === 0) { return []; }
    const that = this;
    return Object.keys(this.props.balances).map((friend_id) => {
      const friend = that.props.accepted.find((friend) => friend.id === Number(friend_id))
      return(
        <li key={ friend.id }>
          <h2>{ friend.fname + " " + friend.lname }</h2>
          { that.balanceTag(Number(that.props.balances[friend.id])) }
        </li>
      );
    });
  }

  balanceTag(balance) {
    if (balance > 0) {
      return(
        <p className="owes_you">
          {`owes you `}
          <strong>{ this.toDollars(balance) }</strong>
        </p>
      );
    } else if (balance < 0) {
      return(
        <p className="you_owe">
          {`you owe `}
          <strong>{ this.toDollars(balance) }</strong>
        </p>
      )
    } else {
      return (<p>'settled'</p>);
    }
  }

  toDollars(num) {
    return ("$" + Math.abs(num).toFixed(2));
  }

  render() {
    return (
      <content className="summary_pane">
        <h1>All Current Balances</h1>
        <ul>
          { this.allBalances() }
        </ul>
        <DetailPane />
      </content>
    );
  }
};

export default SummaryPane;
