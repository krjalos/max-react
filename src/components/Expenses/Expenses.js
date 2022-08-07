import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import classes from './Expenses.module.scss';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={classes.expenses}>
            <ExpensesFilter onFilterChange={filterChangeHandler} currentYear={filteredYear}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;