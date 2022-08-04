import Calendar from "./Calendar";
import Card from "../UI/Card";

import classes from './ExpenseItem.module.scss';


const ExpenseItem = (props) => {
    return (
        <Card className={classes.expenseItem}>
            <Calendar title={props.title} date={props.date} amount={props.amount}></Calendar>
            <div className={classes.description}>
                <h2>{props.title}</h2>
                <div className={classes.price}>${props.amount}</div>
            </div>
            <button>Change title</button>
        </Card>
    );
}

export default ExpenseItem;