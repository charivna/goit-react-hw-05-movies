import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');
  let releaseYear = null;

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);
    fetchMovieById(movieId)
      .then(data => {
        setMovieDetails(data);
      })
      .finally(() => setLoader(false));
  }, [movieId]);

  if (movieDetails) {
    releaseYear = movieDetails.release_date.slice(0, 4);
  }

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      {loader && <Loader />}
      {movieDetails && (
        <>
          <Link to={backLink.current}>Go back</Link>

          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
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
export default MovieDetails;
