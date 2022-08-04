import {useState} from 'react';
import classes from './ExpenseForm.module.scss';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const DateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        setTitle("");
        setAmount("");
        setDate("");

        props.onNewExpense(expenseData);
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className={classes.newExpense__controls}>
                <div className={classes.newExpense__control}>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className={classes.newExpense__control}>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
                </div>
                <div className={classes.newExpense__control}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-01-01" onChange={DateChangeHandler} value={date}/>
                </div>
            </div>
            <div className={classes.newExpense__actions}>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;