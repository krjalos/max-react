import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const classes = `Backdrop ${props.show ? 'show' : 'hide'}`;

  return (
    <div className={classes}></div>
  );
}

export default backdrop;