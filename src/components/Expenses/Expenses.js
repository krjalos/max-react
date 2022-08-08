import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import classes from './Expenses.module.scss';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={classes.expenses}>
            <ExpensesFilter onFilterChange={filterChangeHandler} currentYear={filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;