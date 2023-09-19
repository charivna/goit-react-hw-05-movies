import { useEffect, useState } from 'react';
import * as API from '../services/movie-api';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { List, Title, WraperToday } from './Pages.staled';

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
    <WraperToday>
      <Title>Trending today</Title>
      {loader && <Loader />}
      {movies && (
        <List>
          <MovieList movies={movies} />
        </List>
      )}
    </WraperToday>
  );
};

export default Homepage;
