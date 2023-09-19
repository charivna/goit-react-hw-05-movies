import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { List } from './Layout.styled';
import { StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </List>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
