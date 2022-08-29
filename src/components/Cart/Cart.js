import {useContext, useState} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import OrderForm from "./OrderForm";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [order, setOrder] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, {...item, amount: 1})}
        />
      ))}
    </ul>
  );

  const orderClickHandler = () => {
    setOrder(true);
  }

  const cancelOrderHandler = () => {
    setOrder(false);
  }

  const conformOrderHandler = async (data) => {

    const orderInfo = {
      clientInfo: data,
      orderItems: cartCtx.items
    }

    try {
      const response = await fetch("https://max-react-d73e4-default-rtdb.firebaseio.com/orders.json", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(orderInfo)
      });

      if(response.ok) {

        setOrder(false);
        cartCtx.clearCart();
        props.onClose();
      }else {
        throw new Error("Something went wrong, please try again. Status: " + response.statusText);
      }

    }catch (error) {
      alert(error.message);
    }
  }

  const modalContent = order ?
    <OrderForm onConfirmOrder={conformOrderHandler} onCancelOrder={cancelOrderHandler} onClose={props.onClose} totalAmount={totalAmount}/> :
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button onClick={orderClickHandler} className={classes.button}>Order</button>}
      </div>
    </Modal>;

  return (
    modalContent
  );
};

export default Cart;
