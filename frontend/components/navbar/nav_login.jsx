import React from 'react';
import { Link } from 'react-router';

const NavLogin = () => {
  return(
    <nav className="nav_signin">
      <form>
        <ul className="nav_buttons group">

          <li className="nav_signup">
            <button >
              { "Sign up" }
            </button>
          </li>
          <li class="or">{ "or" }</li>
          <li className="nav_login">
            <button>
              { "Log in" }
            </button>
          </li>
        </ul>

        <section className="navFormInput">

        </section>
      </form>
    </nav>
  );
};

export default NavLogin;
