import {useContext} from "react";
import MeetupContext from "../context/meetup-context";

import Meetups from "../components/meetups/Meetups";

const AllMeetups = () => {
  const meetupsCtx = useContext(MeetupContext);

  return (
    <Meetups meetups={meetupsCtx.meetups}/>
  );
}

export default AllMeetups;