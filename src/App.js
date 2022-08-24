import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
      setLoading(true);
      setError(null);

      try {
          const response = await fetch('https://swapi.dev/api/films');
          if(!response.ok) {
              throw new Error('Something went wrong');
          }
          const data = await response.json();

          const transformedData = data.results.map(movie => {
              return {
                  id: movie.episode_id,
                  title:movie.title,
                  releaseDate:movie.release_date,
                  openingText:movie.opening_crawl
              };
          });
          setMovies(transformedData);

      }catch(error) {
          setError(error.message);
      }
      
      setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
          {!loading && movies.length > 0 && <MoviesList movies={movies} />}
          {!loading && movies.length < 1 && <p>No movies were loaded</p>}
          {!loading && error && <p>{error}</p>}
          {loading && <p>Movies are loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
