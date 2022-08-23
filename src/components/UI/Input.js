import React from "react";

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <input
            className={`${classes.input} ${props.type === 'number'? classes.number : ''}`}
            type={props.type}
            defaultValue={props.defaultValue}
            min={props.minValue}
            ref={ref}
        />
    );
});

export default Input;