import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/movie-api';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

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
    fetchSearchMovies(searchParams).then(({ results }) => {
      setMovies(results);
    });
  }, [searchParams]);

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query}></input>
        <button>Search</button>{' '}
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
