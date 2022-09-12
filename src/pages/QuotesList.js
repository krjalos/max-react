import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  {id: "q1", author:"Test name", text: 'Learning react is cool'},
  {id: "q2", author:"Alex ", text: 'Creating dummy data is not'}
];

const QuotesList = () => {

  const {sendRequest, status, data : allQuotes, error} = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if(status === 'pending'){
    return (
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    );
  }

  if(error) {
    return (
      <p className='centered focused'>{error}</p>
    );
  }

  if(status === 'completed' && allQuotes.length > 0) {
    return (
      <>
        <QuoteList quotes={allQuotes}/>
      </>
    );
  }
}

export default QuotesList;