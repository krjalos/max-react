import React from 'react';

import './Modal.css';

const modal = (props) => {
  const classes = `Modal ${props.currentState}`;

  return (
    <div className={classes}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
  );
};

export default modal;