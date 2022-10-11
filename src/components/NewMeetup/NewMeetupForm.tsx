import React, {useContext, useRef} from "react";
import classes from './NewMeetupForm.module.css';
import MeetupModel from "../../model/MeetupModel";
import useHttp from "../../hooks/useHttp";

const NewMeetupForm = () => {

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const {addMeetup} = useHttp();

  const submitHandler = (event : React.FormEvent) => {
    event.preventDefault();

    if(titleRef.current!.value.trim() === "" || descriptionRef.current!.value.trim() === "" || addressRef.current!.value.trim() === "" || imageRef.current!.value.trim() === "") {
      return;
    }

    const newMeetup : {
      title: string;
      image: string;
      address: string;
      description:  string;
      favorite: boolean;
    } = {
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
      address: addressRef.current!.value,
      image: imageRef.current!.value,
      favorite: false
    };

    addMeetup(newMeetup);
  }

  return (
    <form onSubmit={submitHandler} action="" className={classes.newMeetupForm}>
      <div>
        <label htmlFor="title">Title</label>
        <input ref={titleRef} type="text" id='title' required/>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea ref={descriptionRef} id='description' required></textarea>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input ref={addressRef} type="text" id='address' required/>
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input ref={imageRef} type="text" id='image' required/>
      </div>
      <div>
        <button type='submit'>Add Meetup</button>
      </div>
    </form>
  );
}

export default NewMeetupForm;