import { BtnLoadMore, BtnDiv } from '../UserList/UserList.styled';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <BtnDiv>
      <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
    </BtnDiv>
  );
};
export default LoadMoreBtn;
