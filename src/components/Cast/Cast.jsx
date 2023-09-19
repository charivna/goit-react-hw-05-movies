import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movie-api';
import { CardActor, CardText, CastList, Name } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const message = "We don't have any cast for this movie.";
  useEffect(() => {
    if (!movieId) return;
    fetchMovieCredits(movieId).then(({ cast }) => {
      setCast(cast);
      console.log(cast);
    });
  }, [movieId]);

  const imgurl = 'https://image.tmdb.org/t/p/w300';

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ id, name, character, profile_path }) => (
            <CardActor key={id}>
              <img
                width="150"
                src={profile_path ? `${imgurl}${profile_path}` : defaultImg}
                alt={name}
              />
              <CardText>
                <Name>{name}</Name>
                <p>Character: {character}</p>
              </CardText>
            </CardActor>
          ))}
        </CastList>
      )}
      {cast.length === 0 && message}
    </>
  );
}
