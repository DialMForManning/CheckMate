import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import FriendsPaneContainer from './friends_pane/friends_pane_container';
import ExpensesPane from './expenses_pane/expenses_pane';
import DetailPane from './detail_pane/detail_pane';
import SummaryPane from './summary_pane';

const Dashboard = ({ children }) => {
  return(
    <main>
      <NavbarContainer />
      <article className='dashboard group'>
        <FriendsPaneContainer />
        { children }
        <DetailPane />
      </article>
    </main>
  );
};

export default Dashboard;
