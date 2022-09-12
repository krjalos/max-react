import { useRef } from 'react';

import classes from './NewCommentForm.module.css';
import {useParams} from "react-router-dom";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const params = useParams();

  const submitFormHandler = (event) => {
    event.preventDefault();

    props.onSubmitForm({
      quoteId: params.quoteID,
      commentData: {text: commentTextRef.current.value}
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
