import {Link} from "react-router-dom";
import classes from './Header.module.css'
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.innerWrapper}>
        <Link to='/'>Best meetups</Link>
        <Menu/>
      </div>
    </header>
  );
}

export default Header;