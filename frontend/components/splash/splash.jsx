import React from 'react';
import { Link } from 'react-router';

const Splash = () => {

  return(
    <main className="splash">
      <header>
        <h1>{ "Split expenses with friends" }</h1>
      </header>
      <h3>{ "Keep track of expenses among friends, roommates, coworkers . . ." }</h3>
      <Link to="/signup" className="get_started">
        <h4>Get Started</h4>
        <aside>{ "(for free!)" }</aside>
      </Link>
    </main>
  );
};

export default Splash;
