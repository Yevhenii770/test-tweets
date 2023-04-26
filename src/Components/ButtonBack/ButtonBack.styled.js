import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ButtonBack = styled(NavLink)`
  padding: 8px 16px;

  text-decoration: none;
  background-color: #f0f3f2;
  border: 1px solid grey;
  border-radius: 4px;
  color: black;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.07em;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.25s linear;

  &:hover {
    color: white;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
