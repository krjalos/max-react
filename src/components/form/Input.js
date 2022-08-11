import classes from './Input.module.css';

const Input = props => {
    return (
        <input onChange={props.onInputChange} className={classes.input} key={props.key} value={props.value} type={props.type ? props.type : "text"}/>
    );
}

export default Input;