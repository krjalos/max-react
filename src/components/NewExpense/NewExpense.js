import classes from './NewExpense.module.scss';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    return (
        <div className={classes.newExpense}>
            <ExpenseForm/>
        </div>
    );
}

export default NewExpense;