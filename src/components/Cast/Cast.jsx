import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movie-api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieCredits(movieId).then(({ cast }) => {
      setCast(cast);
      console.log(cast);
    });
  }, [movieId]);

  const imgurl = 'https://image.tmdb.org/t/p/w300';

  // const defaultImg =
  //   'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <img width="100" src={`${imgurl}${profile_path}`} alt={name} />
              )}

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
