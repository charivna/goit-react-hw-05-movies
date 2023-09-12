import { useEffect, useState } from 'react';
import * as API from '../services/movie-api';
import { Link, useLocation } from 'react-router-dom';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    API.fetchTrendingMovies().then(({ results }) => {
      console.log(results);
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: { location } },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Homepage;
