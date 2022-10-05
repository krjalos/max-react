import React from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const searchChangedHandler = (event) => {
    props.onSearchChange(event.target.value.trim());
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input onChange={searchChangedHandler} type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
