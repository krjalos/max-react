import {useContext} from "react";

import classes from './Item.module.css';

import OrderContext from "../contexts/order-context";
import ControlsButton from "../UI/ControlsButton";
import Heading from "../UI/Heading";

const Item = props => {

    const orderCtx = useContext(OrderContext);

    const removeButtonHandler = () => {
        orderCtx.dispatch({
            item:{
                id:props.item.id,
                amount:1,
            },
            action:"REMOVE_ITEM"
        });
    }

    const addButtonHandler = () => {
        orderCtx.dispatch({
            item:{
                id:props.item.id,
                name:props.item.name,
                price:props.item.price,
                amount:1,
            },
            action:"ADD_ITEM"
        });
    }

    return (
        <div className={classes.item}>
            <div className={classes.info}>
                <Heading type="h3" color="#000">{props.item.name}</Heading>
                <div className={classes.priceAmount}>
                    <span className={classes.price}>{props.item.price}</span>
                    <span className={classes.amount}>x{props.item.amount}</span>
                </div>
            </div>
            <div className={classes.controls}>
                <ControlsButton onClick={removeButtonHandler}>-</ControlsButton>
                <ControlsButton onClick={addButtonHandler}>+</ControlsButton>
            </div>
        </div>
    );
}

export default Item;