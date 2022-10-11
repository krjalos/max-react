import React, {useState} from "react";
import MeetupModel from "../model/MeetupModel";
import meetupModel from "../model/MeetupModel";

const MeetupContext = React.createContext<{
  meetups: MeetupModel[];
  toggleFavorite: (id: string) => void;
  addMeetup: (meetup: MeetupModel) => void;
  setMeetups: (meetups: MeetupModel[]) => void;
}>({
  meetups: [],
  toggleFavorite: (id: string) => {},
  addMeetup: (meetup: MeetupModel) => {},
  setMeetups: (meetups: meetupModel[]) => {}
});

const MeetupContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {

  const [meetups, setMeetups] = useState<MeetupModel[]>([]);

  const toggleFavoriteHandler = (id: string) => {

    setMeetups((prevState) => prevState.map(meetup => meetup.id === id ? {
      ...meetup,
      favorite: !meetup.favorite
    } : meetup));
  }

  const addMeetupHandler = (meetup: MeetupModel) => {
    setMeetups((prevState) => [...prevState, new meetupModel(meetup)]);
  }

  const setMeetupHandler = (meetups: MeetupModel[]) => {
    const meetupHelper = [];

    for(const id in meetups) {
      meetupHelper.push({...meetups[id], id: id});
    }
    setMeetups(meetupHelper);
  }

  return <MeetupContext.Provider
    value={{
      meetups: meetups,
      toggleFavorite: toggleFavoriteHandler,
      addMeetup: addMeetupHandler,
      setMeetups: setMeetupHandler
  }}>
    {props.children}
  </MeetupContext.Provider>
}

export default MeetupContext;
export {MeetupContextProvider};