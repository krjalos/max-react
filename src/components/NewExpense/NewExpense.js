import classes from './NewExpense.module.scss';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const newExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id:Math.random()
        }

        props.onAddExpense(expenseData);
    }

    const [showForm, setShowForm] = useState(false);

    const toggleFormHandler = () => {
        setShowForm((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className={classes.newExpense}>
            {showForm === false ?
                <button onClick={toggleFormHandler}>Add New Expense</button>
                : <ExpenseForm onNewExpense={newExpenseHandler} onCancelClick={toggleFormHandler}/>
            }

        </div>
    );
}

export default NewExpense;