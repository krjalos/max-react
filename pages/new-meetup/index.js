import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {

  const onAddMeetupHandler = (meetupData) => {
    console.log(meetupData);
  }

  return (
    <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
  );
}

export default NewMeetup;