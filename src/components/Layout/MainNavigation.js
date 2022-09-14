import { Link } from 'react-router-dom';

import { LoginContext} from "../../context/context";

import classes from './MainNavigation.module.css';
import {useContext} from "react";

const MainNavigation = () => {

  const loginCtx = useContext(LoginContext);

  const logoutHandler = () => {
    loginCtx.updateAuth('');
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          { !loginCtx.isLoggedIn ? <li>
            <Link to='/auth'>Login</Link>
          </li> : null}
          { loginCtx.isLoggedIn ? <li>
            <Link to='/profile'>Profile</Link>
          </li> : null}
          { loginCtx.isLoggedIn ? <li>
            <button onClick={logoutHandler}>Logout</button>
          </li> : null }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
