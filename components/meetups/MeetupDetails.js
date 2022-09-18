import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.meetup.img} alt={props.meetup.title}/>
      <h1>{props.meetup.title}</h1>
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </section>
  );
}

export default MeetupDetails;