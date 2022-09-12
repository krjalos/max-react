import {useEffect, useState} from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from "../../hooks/use-http";
import {addComment, getAllComments} from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import {useParams} from "react-router-dom";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const params = useParams();

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const {sendRequest, status, error} = useHttp(addComment, true);

  const {sendRequest:getComments, status: commentsStatus, data: allComments, error: commentsError} = useHttp(getAllComments, true);

  const submitFormHandler = (data) => {
    setFormSubmitted(true);
    setIsAddingComment(false);
    sendRequest(data);
  }

  useEffect(() => {
    getComments(params.quoteID);
  }, [getComments, params.quoteID, status]);
  
  console.log(status);

  if(status === 'pending' && formSubmitted) {
    return (
      <div className="centered">
        <LoadingSpinner/>
      </div>
    );
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onSubmitForm={submitFormHandler} />}
      {allComments && <CommentsList comments={allComments}/>}
    </section>
  );
};

export default Comments;
