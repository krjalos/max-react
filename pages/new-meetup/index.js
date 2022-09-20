import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

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
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name='description' content='Add new perfect meetup here!'/>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </>
  );
}

export default NewMeetup;