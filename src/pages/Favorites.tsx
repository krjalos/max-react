import {useContext} from "react";
import MeetupContext from "../context/meetup-context";

import Meetups from "../components/meetups/Meetups";

const Favorites = () => {
  const meetupsCtx = useContext(MeetupContext);

  const favoriteMeetups = meetupsCtx.meetups.filter(meetup => meetup.favorite);

  return (
    <Meetups meetups={favoriteMeetups}/>
  );
}

export default Favorites;