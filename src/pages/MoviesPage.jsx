import { Link } from 'react-router-dom';

export const MoviesSearch = () => {
  return (
    <>
      {/* делаем запрос на собак по айди через юз ефект как в хоум пейдж и записываем в стейт */}
      <h1>Find your movie</h1>
      {['film-1', 'film-1', 'film-3', 'film-4'].map(film => {
        return (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        );
      })}
    </>
  );
};
