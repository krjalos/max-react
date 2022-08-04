import {useState} from 'react';

import Calendar from "./Calendar";
import Card from "../UI/Card";

import classes from './ExpenseItem.module.scss';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const buttonClickHandler = () => {
        setTitle("Updated!");
    }


    return (
        <Card className={classes.expenseItem}>
            <Calendar title={props.title} date={props.date} amount={props.amount}></Calendar>
            <div className={classes.description}>
                <h2>{title}</h2>
                <div className={classes.price}>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;