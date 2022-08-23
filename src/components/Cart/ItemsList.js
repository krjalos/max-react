import {useContext} from "react";
import OrderContext from "../contexts/order-context";

import classes from './ItemsList.module.css';
import Item from "./Item";

const ItemsList = () => {
    const orderCtx = useContext(OrderContext);

    let total = 0;

    orderCtx.order.map(item => {
        total += item.price * item.amount;

        return false;
    });

    total = total.toFixed(2);

    return (
        <div className={classes.itemList}>
            <ul>
                {orderCtx.order.map(item => {

                    return (
                        <li  key={item.id}>
                            <Item item={item}/>
                        </li>
                    );
                })}
            </ul>
            <div className={classes.totalAmount}>
                <div>Total Amount</div>
                <div>${total}</div>
            </div>
        </div>
    );
}

export default ItemsList;