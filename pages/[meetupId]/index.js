import MeetupDetails from "../../components/meetups/MeetupDetails";
import {MongoClient, ObjectId} from "mongodb";
import Head from "next/head";

const MeetupPage = (props) => {
  return (
    <>
      <Head>
        <title>Meetup Page | {props.meetup.title}</title>
        <meta name='description' content={`All about ${props.meetup.title}`}/>
      </Head>
      <MeetupDetails meetup={props.meetup}/>
    </>
  )
}

export const getStaticPaths = async () => {

  const client = await MongoClient.connect('mongodb+srv://admin:cZA4gldCSqDP6EFT@max-react.33ucdz2.mongodb.net/meetups?retryWrites=true&w=majority');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().project({_id: 1}).toArray();

  client.close();

  return {
    fallback:false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://admin:cZA4gldCSqDP6EFT@max-react.33ucdz2.mongodb.net/meetups?retryWrites=true&w=majority');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId)});



  client.close();

  return {
    props: {
      meetup:{
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description:meetup.description
      }
    },
    revalidate: 100
  }
}

export default MeetupPage;