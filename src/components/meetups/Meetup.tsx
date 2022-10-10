import React from "react";
import {useContext} from "react";
import MeetupContext from "../../context/meetup-context";

import MeetupModel from "../../model/MeetupModel";
import classes from './Meetup.module.css';
import {Link} from "react-router-dom";

const Meetup:React.FC<{meetup:MeetupModel}> = (props) => {

  const meetupCtx = useContext(MeetupContext);

  return (
    <div className={classes.meetup}>
      <img src={props.meetup.image} alt={props.meetup.title}/>
      <div className={classes.contentWrapper}>
        <h2>{props.meetup.title}</h2>
        <div className={classes.controls}>
          <button onClick={meetupCtx.toggleFavorite.bind(this, props.meetup.id)} className={classes.button}>{props.meetup.favorite ? "Un-favorite" : "Favorite"}</button>
          <Link to={`meetup/${props.meetup.id}`} className={classes.button}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default Meetup;