import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Film = styled.li``;

export const MoviesLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  text-decoration: none;
  font-weight: 250px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #1e6c21de;
    font-weight: bold;
  }
`;
