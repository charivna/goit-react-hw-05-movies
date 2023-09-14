import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'services/movie-api';

export const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');
  const getQuery = new URLSearchParams(location.search).get('query');
  const [searchParams, setSearchParams] = useState(getQuery ? getQuery : '');

  useEffect(() => {
    fetchSearchMovies(searchParams).then(({ results }) => {
      if (results.length === 0) {
        alert(`Not match for reaquest`);
        return;
      }
      setMovies(results);
    });
  }, [searchParams]);

  const onInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Please enter text');
      return;
    }

    setSearchParams(query);
    setQuery('');
  };

  return (
    <>
      <Link to={backLink.current}>
        <button>Go back</button>
      </Link>

      <h1>Find your movie</h1>
      <Link>
        <div> Hello </div>
      </Link>

      <form action="submit" onSubmit={handleSubmit}>
        <input onChange={onInputChange} value={query}></input>
        <button>Search</button>
      </form>

      {movies.length > 0 && (
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
