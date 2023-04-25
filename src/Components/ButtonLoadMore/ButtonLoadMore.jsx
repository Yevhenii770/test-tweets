import { BtnLoadMore, BtnDiv } from './LoadButton.styled';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <BtnDiv>
      <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
    </BtnDiv>
  );
};
export default LoadMoreBtn;
