import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>All meetups here!</title>
        <meta name='description' content='All meetups in one place bla bla'/>
      </Head>
      <MeetupList meetups={props.meetups}/>
    </>
  );
}

export const getStaticProps = async () => {

  const client = await MongoClient.connect('mongodb+srv://admin:cZA4gldCSqDP6EFT@max-react.33ucdz2.mongodb.net/meetups?retryWrites=true&w=majority');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups:meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 100
  };
}

export default Homepage;