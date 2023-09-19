import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movie-api';
import { ListReviews } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const message = "We don't have any reviews for this movie.";

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId).then(({ results }) => {
      setReviews(results);
      console.log(results);
    });
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ListReviews>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ListReviews>
      )}

      {reviews.length === 0 && message}
    </>
  );
}
