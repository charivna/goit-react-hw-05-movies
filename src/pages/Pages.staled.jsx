import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Title = styled.h1``;
export const WraperToday = styled.div`
  text-align: center;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Form = styled.form`
  text-align: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  border: 2px solid black;
  width: 300px;
  height: 30px;
`;

export const Button = styled.button`
  margin-left: 15px;
  background-color: #1e6c21de;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  border: 1.5px solid rgb(171, 163, 163);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear;
  &:hover {
    background-color: white;
    color: green;

    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const BtnBack = styled(Link)`
  margin: 20px;
  display: block;
  width: 60px;
  text-decoration: none;
  background-color: #1e6c21de;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  border: 1.5px solid rgb(171, 163, 163);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear;
  &:hover {
    background-color: white;
    color: green;

    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const MainInfo = styled.div`
  display: flex;
  margin: 20px;
`;

export const MainText = styled.div`
  margin-left: 20px;
  font-size: 20px;
`;

export const Genres = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const AddInfo = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  gap: 30px;
`;

export const AddLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: color 250ms linear, font-weight 250ms linear;

  &:hover {
    color: #1e6c21de;
    font-weight: 800;
  }
`;
