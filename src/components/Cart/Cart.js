import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../../store/cart";

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);

  const addItem = (item) => {
    dispatch(cartActions.addItem(item));
  }

  const removeItem = (item) => {
    dispatch(cartActions.removeItem(item));
  }


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => <CartItem
          key={item.id}
          item={{id: item.id, title: item.title, quantity: item.amount, total: item.price * item.amount, price: item.price}}
          onAddItem={addItem}
          onRemoveItem={removeItem}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
