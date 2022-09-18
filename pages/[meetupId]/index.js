import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupPage = (props) => {
  return (
    <>
      <MeetupDetails meetup={props.meetup}/>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  };
}

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetup:{
        id:meetupId,
        img:'https://picsum.photos/600/400',
        title: 'This is the first meetup!',
        address:'Tamme 17, 1211, Tallinn, Estonia',
        description:'Let\'s drink!'
      }
    }
  }
}

export default MeetupPage;