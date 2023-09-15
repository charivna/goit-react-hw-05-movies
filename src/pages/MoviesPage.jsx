import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('film') ?? '');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      alert('Please enter text');
      return;
    }

    setSearchParams({ film: query });
    setQuery('');
  };

  useEffect(() => {
    setLoader(true);
    fetchSearchMovies(searchParams)
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => setLoader(false));
  }, [searchParams]);

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query}></input>
        <button>Search</button>
        {loader && <Loader />}
      </form>
      {movies.length > 0 && (
        <ul>
          <MovieList movies={movies} />
        </ul>
      )}
    </>
  );
};

export default MoviesSearch;
