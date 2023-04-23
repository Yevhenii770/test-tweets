import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const PhotoImg = styled.img`
  width: 62px;
  border-radius: 50%;

  border: 9px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const BgPhoto = styled.img`
  margin-top: 28px;
`;

export const BgPhotoDiv = styled.div``;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
