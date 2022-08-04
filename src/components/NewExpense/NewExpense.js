import classes from './NewExpense.module.scss';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const newExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id:Math.random()
        }

        props.onAddExpense(expenseData);
    }
    return (
        <div className={classes.newExpense}>
            <ExpenseForm onNewExpense={newExpenseHandler}/>
        </div>
    );
}

export default NewExpense;