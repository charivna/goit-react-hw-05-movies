import { Route, Routes } from 'react-router-dom';
import Homepage from 'pages/HomePage';
import { MoviesSearch } from 'pages/MoviesPage';
import { MovieDetails } from 'pages/MovieDetailsPage';
import { Layout } from './Layout';
import Cast from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route />
        </Route>
      </Routes>
    </>
  );
};
