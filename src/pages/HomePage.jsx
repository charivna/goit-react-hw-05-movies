import { useEffect, useState } from 'react';
import * as API from '../services/movie-api';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then(({ results }) => {
      if (results.length === 0) {
        alert(`No trending today`);
        return;
      }
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {movies && (
        <ul>
          <MovieList movies={movies} />
        </ul>
      )}
    </>
  );
};

export default Homepage;
