import CSSTransition from "react-transition-group/CSSTransition";
import React, {useRef} from 'react';

import './Modal.css';

const modal = (props) => {
  const nodeRef = useRef();

  return (
    <CSSTransition nodeRef={nodeRef} mountOnEnter unmountOnExit in={props.show} timeout={400} classNames="fade-slide">
      <div ref={nodeRef} className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
      </div>
    </CSSTransition>
  );
};

export default modal;