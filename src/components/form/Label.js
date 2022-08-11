import classes from './Label.module.css';

const Label = props => {
    return (
        <label className={classes.label}>{props.label}</label>
    );
}

export default Label;