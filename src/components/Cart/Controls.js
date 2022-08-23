import classes from './Controls.module.css';
import ControlsButton from "../UI/ControlsButton";

const Controls = props => {
    return (
        <div className={classes.controls}>
            <ControlsButton onClick={props.onClose} className={classes.whiteButton} type="button">Close</ControlsButton>
            <ControlsButton type="button">Order</ControlsButton>
        </div>
    );
}

export default Controls;