import { Fragment, useState } from 'react';
import {useHistory, useLocation} from "react-router-dom";

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const QuoteList = (props) => {
  const history = useHistory();
  const [sortingOptions] = useState(['asc', 'desc']);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const sorting = queryParams.get('sort') && sortingOptions.includes(queryParams.get('sort')) ? queryParams.get('sort') : sortingOptions[0];

  let sortedArray;

  if(sorting === "asc") {
    sortedArray = props.quotes.sort((a, b) => {
      return a.id.replace('q', '') > b.id.replace('q', '') ? 1 : -1;
    });
  }else {
    sortedArray = props.quotes.sort((a, b) => {
      return a.id.replace('q', '') < b.id.replace('q', '') ? 1 : -1;
    })
  }

  const sortingHandler = () => {
    history.push({
      pathname:location.pathname,
      search:`sort=${sorting === 'asc' ? 'desc' : 'asc'}`
    });
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sort {sorting === 'asc' ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedArray.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
