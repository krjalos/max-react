import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetup = () => {

  const router = useRouter();

  const onAddMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method:"POST",
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    const data = await response.json();

    router.push('/');
  }

  return (
    <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
  );
}

export default NewMeetup;