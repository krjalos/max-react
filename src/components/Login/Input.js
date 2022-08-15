import React, {useRef, useImperativeHandle} from "react";
import classes from "./Input.module.css";


const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const focusOnInput = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            goTo: focusOnInput
        }
    });

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.inputId}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.inputId}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
});

export default Input;