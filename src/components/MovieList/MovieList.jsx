import { useLocation } from 'react-router-dom';
import { Film, MoviesLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(movie => (
        <Film key={movie.id}>
          <MoviesLink
            to={{
              pathname: `/movies/${movie.id}`,
            }}
            state={{ from: location }}
          >
            {movie.title}
          </MoviesLink>
        </Film>
      ))}
    </>
  );
};

export default MovieList;
