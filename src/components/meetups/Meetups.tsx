import Meetup from "../../components/meetups/Meetup";
import classes from './Meetups.module.css';
import React from "react";
import MeetupModel from "../../model/MeetupModel";


const Meetups: React.FC<{meetups: MeetupModel[]}> = (props) => {

  return (
    <div className={classes.meetupsWrapper}>
      {props.meetups.map(meetup => <Meetup key={meetup.id} meetup={meetup}/>)}
    </div>
  );
}

export default Meetups;