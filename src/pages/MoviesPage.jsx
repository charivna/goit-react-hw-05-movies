import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { Button, Form, Input, List, WraperToday } from './Pages.staled';
import { ToastContainer, toast } from 'react-toast';

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
      toast.error('Please enter your query');
      return;
    }

    setSearchParams({ query });
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
    <WraperToday>
      <Form action="submit" onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={query}
          placeholder="What film do you want?"
        ></Input>
        <Button>Search</Button>
        {loader && <Loader />}
      </Form>
      {movies.length > 0 && (
        <List>
          <MovieList movies={movies} />
        </List>
      )}
      <ToastContainer position="top-right" delay="3000" />
    </WraperToday>
  );
};

export default MoviesSearch;
