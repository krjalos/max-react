import {NavLink} from "react-router-dom";
import classes from './Menu.module.css'

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <NavLink end to='/' className={({isActive}) => {return isActive ? classes.active : ""}}>All Meetups</NavLink>
      </li>
      <li>
        <NavLink to='/favorites' className={({isActive}) => {return isActive ? classes.active : ""}}>Favorites</NavLink>
      </li>
      <li>
        <NavLink to='/new-meetup' className={({isActive}) => {return isActive ? classes.active : ""}}>New Meetup</NavLink>
      </li>
    </ul>
  );
}

export default Menu;