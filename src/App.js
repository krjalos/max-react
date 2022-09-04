import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {uploadCart, downloadCart} from "./store/cart-fetching";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const {items, notification, showCart} = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(downloadCart());
  }, [dispatch]);

  useEffect(() => {
    if(initial) {
      initial = false;
      return;
    }

    dispatch(uploadCart(items));



  }, [items, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart/>}
        <Products />
      </Layout>
    </>
  );
}

export default App;
