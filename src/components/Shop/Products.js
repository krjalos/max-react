import { useSelector, useDispatch } from "react-redux";
import {cartActions} from "../../store/cart";


import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menu);

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item))
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {}
      <ul>
        {menuItems.map(item => <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          onAddItem={addItemHandler}
        />)}
      </ul>
    </section>
  );
};

export default Products;
