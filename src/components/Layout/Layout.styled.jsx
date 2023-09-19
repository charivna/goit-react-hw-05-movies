import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 30px;
  text-decoration: none;

  &.active {
    color: #1e6c21de;
    border: 2px #1e6c21de solid;
    padding: 10px;
    border-radius: 50%;
  }
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 15px;
  margin: 0;
  align-items: center;
  justify-content: center;
  gap: 50px;
  font-weight: 600;
  color: black;
  border-bottom: 1px solid black;
`;
