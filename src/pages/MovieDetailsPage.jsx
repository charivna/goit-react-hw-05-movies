import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import {
  AddInfo,
  AddLink,
  BtnBack,
  Genres,
  MainInfo,
  MainText,
} from './Pages.staled';

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
          <BtnBack to={backLink.current}>Go back</BtnBack>
          <MainInfo>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`
                  : defaultImg
              }
              width={300}
              alt="poster"
            />
            <MainText>
              <h2>
                {movieDetails.title} ({releaseYear})
              </h2>
              <h3>User Score: {movieDetails.vote_average * 10}%</h3>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <Genres>
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
              </Genres>
            </MainText>
          </MainInfo>
          <h2>Additional information</h2>

          <AddInfo>
            <li>
              <AddLink to="cast">Cast</AddLink>
            </li>
            <li>
              <AddLink to="reviews">Reviews</AddLink>
            </li>
          </AddInfo>
          <Outlet />
        </>
      )}
    </>
  );
};
export default MovieDetails;
