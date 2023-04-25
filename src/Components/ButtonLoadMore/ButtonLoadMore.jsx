import { BtnLoadMore, BtnDiv } from './LoadButton.styled';

const Button = ({ handleLoadMore }) => {
  return (
    <BtnDiv>
      <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
    </BtnDiv>
  );
};
export default Button;
