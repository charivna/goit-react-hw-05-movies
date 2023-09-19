import styled from '@emotion/styled';

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
