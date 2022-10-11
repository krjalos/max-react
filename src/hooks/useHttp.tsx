import {useCallback} from "react";
import MeetupModel from "../model/MeetupModel";
import MeetupContext from "../context/meetup-context";
import {useContext} from "react";

import {useNavigate} from "react-router-dom";

const useHttp = () => {
  const meetupCtx = useContext(MeetupContext);
  const navigate = useNavigate();

  const addMeetup = useCallback(async (meetup : {
    title: string;
    image: string;
    address: string;
    description:  string;
    favorite: boolean;
  }) => {
    fetch("https://max-react-hooks-4184d-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(meetup)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if(data.name) {
        meetupCtx.addMeetup({...meetup, id: data.name});
      }
      navigate('/');
    }).catch((error) => {
      console.log(error.message);
    });
  }, [meetupCtx]);

  const toggleFavorite = useCallback(async (meetupId : string, favorite : boolean) => {
    fetch(`https://max-react-hooks-4184d-default-rtdb.firebaseio.com/meetups/${meetupId}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({favorite: !favorite})

    }).then((response) => {
      return response.json();
    }).then((data) => {
      meetupCtx.toggleFavorite(meetupId);
    }).catch((error) => {
      console.log(error.message);
    });
  }, [meetupCtx]);

  const getMeetups = useCallback(async () => {
    fetch("https://max-react-hooks-4184d-default-rtdb.firebaseio.com/meetups.json", {
      method: "GET"
    }).then((response) => {
      return response.json();
    }).then((data) => {
      meetupCtx.setMeetups(data);
    }).catch((error) => {
      console.log(error.message);
    });
  }, []);

  return {addMeetup, getMeetups, toggleFavorite};
}

export default useHttp;