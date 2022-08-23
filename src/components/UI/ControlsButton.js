import classes from './ControlsButton.module.css';

const ControlsButton = props => {
    return (
        <button className={`${classes.button} ${props.className}`} type={props.type} onClick={props.onClick}>{props.children}</button>
    );
}

export default ControlsButton;