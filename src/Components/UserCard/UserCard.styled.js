import styled from '@emotion/styled';
import img from '../../img/picture.png';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const CardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 380px;
  height: 460px;
  padding-bottom: 36px;
  gap: 26px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  background-image: url(${img}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: 50% 10%;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 20px;

  @media screen and (min-width: 320px) and (max-width: 420px) {
    width: 300px;
  }
`;

export const PhotoImg = styled.img`
  position: relative;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  width: 63px;
  z-index: 10;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
