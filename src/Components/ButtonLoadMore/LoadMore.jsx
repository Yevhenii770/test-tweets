import { BtnLoadMore, BtnDiv } from '../../Pages/Tweets/Tweets.styled';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <BtnDiv>
      <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
    </BtnDiv>
  );
};
export default LoadMoreBtn;
