import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/movie-api';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/movies');

  const film = searchParams.get('film') ?? '';

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
      console.log(results);
    });
  }, [searchParams]);

  return (
    <>
      <Link to={backLink.current}>Go back</Link>

      <form action="submit" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query}></input>
        <button>Search</button>{' '}
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                }}
                state={{ from: location }}
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

// const MoviesSearch = () => {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('');
//   const location = useLocation();
//   const backLink = useRef(location.state?.from || '/movies');
//   const getQuery = new URLSearchParams(location.search).get('query');
//   const [searchParams, setSearchParams] = useState(getQuery ? getQuery : '');

//   useEffect(() => {
//     fetchSearchMovies(searchParams).then(({ results }) => {
//       setMovies(results);
//     });
//   }, [searchParams]);

//   const onInputChange = event => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (query.trim() === '') {
//       alert('Please enter text');
//       return;
//     }

//     setSearchParams({ getQuery: query });
//     setQuery('');
//   };

//   return (
//     <>
//       <Link to={backLink.current}>
//         <button>Go back</button>
//       </Link>

//       <h1>Find your movie</h1>
//       <Link>
//         <div> Hello </div>
//       </Link>

//       <form action="submit" onSubmit={handleSubmit}>
//         <input onChange={onInputChange} value={query}></input>
//         <button>Search</button>
//       </form>

//       {movies.length > 0 && (
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id}>
//               <Link
//                 to={{
//                   pathname: `/movies/${movie.id}`,
//                 }}
//                 state={{ from: location }}
//               >
//                 {movie.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

export default MoviesSearch;
