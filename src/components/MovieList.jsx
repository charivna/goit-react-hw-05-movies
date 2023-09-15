import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
            }}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MovieList;
