import { useEffect, useState } from 'react';
import * as API from '../services/movie-api';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    API.fetchTrendingMovies()
      .then(({ results }) => {
        if (results.length === 0) {
          alert(`No trending today`);
          return;
        }
        setMovies(results);
      })
      .finally(() => setLoader(false));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loader && <Loader />}
      {movies && (
        <ul>
          <MovieList movies={movies} />
        </ul>
      )}
    </>
  );
};

export default Homepage;
