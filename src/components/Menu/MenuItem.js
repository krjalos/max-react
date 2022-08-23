import {useContext, useRef} from "react";
import classes from './MenuItem.module.css';
import Heading from "../UI/Heading";
import Input from "../UI/Input";
import ControlsButton from "../UI/ControlsButton";
import OrderContext from "../contexts/order-context";

const MenuItem = props => {
    const orderCtx = useContext(OrderContext);

    const inputRef = useRef();

    const addButtonHandler = () => {

        orderCtx.dispatch({
            item: {
                id:props.item.id,
                name:props.item.name,
                price:props.item.price,
                amount: +inputRef.current.value,
            },
            action:"ADD_ITEM"
        });

        inputRef.current.value = 1;
    }

    return (
        <div className={classes.menuItem}>
            <div className={classes.info}>
                <Heading type="h3" className={classes.heading}>{props.item.name}</Heading>
                <p className={classes.description}>{props.item.description}</p>
                <p className={classes.price}>${props.item.price}</p>
            </div>
            <div className={classes.controls}>
                <div className={classes.amount}>
                    <span>Amount</span>
                    <Input ref={inputRef} type="number" defaultValue={1} minValue={1}/>
                </div>
                <div className={classes.addItem}>
                    <ControlsButton onClick={addButtonHandler}>+ Add</ControlsButton>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;