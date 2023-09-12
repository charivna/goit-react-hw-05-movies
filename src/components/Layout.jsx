import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </>
  );
};
