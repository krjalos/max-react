import ExpenseItem from "./ExpenseItem";

import classes from './ExpensesList.module.scss';

const ExpensesList = (props) => {

    let expensesContent = <p>No Expenses Found</p>;

    if(props.expenses.length === 0) {
        return (
            <h2 className={classes.expensesList__fallback}>{expensesContent}</h2>
        );
    }

    return (
        <ul className={classes.expensesList}>
            {props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </ul>
    );
}

export default ExpensesList;