import classes from './Header.module.css';
import Heading from "../UI/Heading";
import CartIcon from "../CartIcon/CartIcon";

const Header = props => {
    return (
        <header className={classes.header}>
            <div className={classes.innerWrapper}>
                <Heading type='h1'>ReactMeals</Heading>
                <CartIcon onCartOpen={props.onCartOpen}/>
            </div>
        </header>
    );
}

export default Header;