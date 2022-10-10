import React, {useState} from "react";
import MeetupModel from "../model/MeetupModel";
import meetupModel from "../model/MeetupModel";

const MeetupContext = React.createContext<{
  meetups: MeetupModel[];
  toggleFavorite: (id: string) => void;
  addMeetup: (meetup: MeetupModel) => void;
}>({
  meetups: [],
  toggleFavorite: (id: string) => {},
  addMeetup: (meetup: MeetupModel) => {}
});

const MeetupContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {

  const [meetups, setMeetups] = useState<MeetupModel[]>([new MeetupModel({
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://i.picsum.photos/id/1006/800/600.jpg?hmac=nwxcvq9bA1kg8dt9iFDxXrENJymxa7UAhY8G3fDa5I4',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  }),
    new meetupModel({
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://i.picsum.photos/id/855/800/600.jpg?hmac=PJoSQj9I-RCHZWlkSyqGtW38F5T2D1j5rT342kMVKKU',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    })]);

  const toggleFavoriteHandler = (id: string) => {
    setMeetups((prevState) => prevState.map(meetup => meetup.id === id ? {
      ...meetup,
      favorite: !meetup.favorite
    } : meetup));
  }

  const addMeetupHandler = (meetup: MeetupModel) => {
    setMeetups((prevState) => [...prevState, meetup]);
  }

  return <MeetupContext.Provider
    value={{meetups: meetups, toggleFavorite: toggleFavoriteHandler, addMeetup: addMeetupHandler}}>
    {props.children}
  </MeetupContext.Provider>
}

export default MeetupContext;
export {MeetupContextProvider};