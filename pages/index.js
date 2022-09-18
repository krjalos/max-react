import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id:'m1',
    title:"This is the first meetup!",
    address: "Tamme 17, 1211, Tallinn, Estonia",
    description: "Let's drink!",
    image: "https://picsum.photos/600/400"
  },
  {
    id:'m2',
    title:"This is the second meetup!",
    address: "Uuus 19, 12431, Tallinn, Estonia",
    description: "Let's drink some more!",
    image: "https://picsum.photos/600/400"
  }
];

const Homepage = (props) => {
  return (
    <MeetupList meetups={props.meetups}/>
  );
}

// export const getServerSideProps = (context) => {
//
//   return {
//     props: {
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }

export const getStaticProps = async () => {
  return {
    props: {
      meetups:DUMMY_MEETUPS
    },
    revalidate: 20
  };
}

export default Homepage;