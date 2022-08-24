import React from "react";
const Demo = props => {
    console.log("demo running");
    return (

        <p>{props.show && "I'm new!"}</p>
    );
}

export default React.memo(Demo);