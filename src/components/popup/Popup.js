import classes from './Popup.module.css';
import Button from "../UI/Button";

const Popup = props => {
    return (
        <div className={classes.popupOuter}>
            <div className={classes.popup}>
                <div className={classes.headingContent}>
                    <h2>{props.content.heading}</h2>
                </div>
                <div className={classes.popupContent}>
                    <div className={classes.popupText}>
                        {props.content.text}
                    </div>
                    <div className={classes.navWrapper}>
                        <Button typeButton={true} onButtonClick={props.onButtonClick}>{props.content.button}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;