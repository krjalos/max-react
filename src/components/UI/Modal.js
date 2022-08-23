import ReactDOM from "react-dom";

import classes from './Modal.module.css';
import Card from "./Card";

const Modal = props => {

    const modal = (
        <div className={classes.modal}>
            <Card className={classes.card}>
                {props.children}
            </Card>
            <div className={classes.overlay} onClick={props.onClose}></div>
        </div>
    );

    return (
        ReactDOM.createPortal(modal, document.getElementById('modal-root'))
    );
}

export default Modal;