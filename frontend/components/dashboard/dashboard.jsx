import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import FriendsPane from '../friends_pane/friends_pane';
import ExpensesPane from '../expenses_pane/expenses_pane';
import DetailPane from '../detail_pane/detail_pane';

const Dashboard = ({ currentUser }) => {
  return(
    <main>
      <NavbarContainer />
      <article className='dashboard group'>
        <FriendsPane />
        <ExpensesPane />
        <DetailPane />
      </article>
    </main>
  );
};

export default Dashboard;
