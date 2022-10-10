import React from "react";
import classes from './Page.module.css';

const Page: React.FC<{children : React.ReactNode}> = (props) => {
  return (
    <div className={classes.page}>
      {props.children}
    </div>
  );
}

export default Page;