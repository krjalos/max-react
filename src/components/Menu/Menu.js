import React from "react";

import classes from './Menu.module.css';
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

const Menu = props => {

    return (
        <Card className={classes.menu}>
            {props.items.map((meal) => {
                return <MenuItem key={meal.id} item={meal}/>
            })}
        </Card>
    );
}

export default Menu;