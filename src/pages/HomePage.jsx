import { useEffect, useState } from 'react';
import * as API from '../services/movie-api';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  console.log(movies);
  useEffect(() => {
    API.fetchTrendingMovies().then(({ result }) => {
      setMovies(result);
    });
  }, []);

  return <></>;
};

export default Homepage;
