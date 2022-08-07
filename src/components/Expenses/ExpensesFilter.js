import classes from './ExpensesFilter.module.scss';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    }
    return (
        <div className={classes.expensesFilter}>
            <div className={classes.control}>
                <label>Filter by year</label>
                <select value={props.currentYear} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;