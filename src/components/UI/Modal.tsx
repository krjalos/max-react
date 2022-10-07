import React from "react";
import classes from './Modal.module.css';

const Modal : React.FC<{cancel : () => void; confirm: () => void}> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop}></div>
      <div className={classes.popup}>
        <p>Are you sure you want to delete the Todo?</p>
        <div className={classes.controls}>
          <button onClick={props.cancel} className={classes.cancelButton}>Cancel</button>
          <button onClick={props.confirm} className={classes.confirmButton}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;