import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ButtonBack = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;

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

  &.active {
    color: white;
    background-color: #5cd3a8;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;