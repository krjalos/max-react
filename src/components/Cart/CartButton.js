import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../../store/cart";
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector(state => state.cart.totalItems);
  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
