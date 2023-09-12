import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <h1>One movie info</h1>

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
  );
};
