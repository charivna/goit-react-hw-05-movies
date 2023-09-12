import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/movie-api';
import * as API from '../services/movie-api';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then(({ result }) => {
      setMovies(result);
    });
  }, []);

  return <></>;
};

export default Homepage;
