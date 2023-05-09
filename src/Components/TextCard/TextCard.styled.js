import styled from '@emotion/styled';

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 8.5px;
    top: 250px;
    background-color: #ebd8ff;
  }
`;
