import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movie-api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');
  let releaseYear = null;

  useEffect(() => {
    if (!movieId) return;
    fetchMovieById(movieId).then(data => {
      setMovieDetails(data);
      console.log(data);
    });
  }, [movieId]);

  if (movieDetails) {
    releaseYear = movieDetails.release_date.slice(0, 4);
  }

  return (
    <>
      {movieDetails && (
        <>
          <Link to={backLink.current}>
            <button>Go back</button>
          </Link>

          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>
            {movieDetails.title} ({releaseYear})
          </h2>
          <p>User Score: {movieDetails.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails.genres.map(({ id, name }) => {
              return (
                <li
                  style={{
                    marginRight: '10px',
                  }}
                  key={id}
                >
                  {name}
                </li>
              );
            })}
          </ul>
          <p>Additional information</p>

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
