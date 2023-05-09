import styled from '@emotion/styled';
export const Button = styled.button`
  cursor: pointer;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  transition: background-color 0.25s linear;
  text-transform: uppercase;
  border: none;
  color: #373737;

  &.active {
    background-color: #5cd3a8;
  }
  &:hover {
    background-color: #5cd3a8;
  }
`;
