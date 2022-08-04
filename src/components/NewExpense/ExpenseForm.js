import {useState} from 'react';
import classes from './ExpenseForm.module.scss';

const ExpenseForm = () => {

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const {userInput, setUserInput} = useState({
        title:"",
        amount:"",
        date:""
    });

    const titleChangeHandler = (event) => {
        // setTitle(event.target.value);

        setUserInput((prevState) => {
            return {...prevState, title: event.target.value};
        });
    }

    const amountChangeHandler = (event) => {
        // setAmount(event.target.value);

        setUserInput((prevState) => {
            return {...prevState, amount: event.target.value};
        });
    }

    const DateChangeHandler = (event) => {
        // setDate(event.target.value);

        setUserInput((prevState) => {
            return {...prevState, date: event.target.value};
        });
    }

    return (
        <form action="">
            <div className={classes.newExpense__controls}>
                <div className={classes.newExpense__control}>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className={classes.newExpense__control}>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className={classes.newExpense__control}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-01-01" onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className={classes.newExpense__actions}>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;