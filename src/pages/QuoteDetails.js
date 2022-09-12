import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import useHttp from "../hooks/use-http";
import {getAllQuotes, getSingleQuote} from "../lib/api";

import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();

  const match = useRouteMatch();

  const {sendRequest, status, data : currentQuote, error} = useHttp(getSingleQuote, true);

  useEffect(()=> {
    sendRequest(params.quoteID);
  }, [sendRequest]);

  if(status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner/>
      </div>
    );
  }

  if(status === 'completed' && !error) {

    const quote = currentQuote;
    return (
      <section>

        <HighlightedQuote
          author={quote.author}
          text={quote.text}
        />
        <Route path={match.path} exact>
          <div className="centered">
            <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments/>
        </Route>
      </section>
    );
  }
}

export default QuoteDetails;