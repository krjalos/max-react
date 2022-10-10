import {useContext} from "react";
import MeetupContext from "../../context/meetup-context";
import {useParams} from "react-router-dom";

import classes from "./Meetup.module.css";

const SingleMeetup = () => {

  const params = useParams();

  const meetupId : string = params.meetupId!;

  const meetupCtx = useContext(MeetupContext);
  
  const meetup = meetupCtx.meetups.find(meetup => meetup.id === meetupId);

  const content = meetup ? <div className={classes.meetup}>
    <img src={meetup.image} alt={meetup.title}/>
    <div className={classes.contentWrapper}>
      <h2>{meetup.title}</h2>
      <div className={classes.descr}>
        {meetup.description}
      </div>
      <div className={classes.address}>
        {meetup.address}
      </div>
      <div className={classes.controls}>
        <button onClick={meetupCtx.toggleFavorite.bind(this, meetup.id)} className={classes.button}>{meetup.favorite ? "Un-favorite" : "Favorite"}</button>
      </div>
    </div>
  </div> : <p>No meetup found</p>

  return content;
}

export default SingleMeetup;