import { useState, useEffect } from 'react';
import { fetchUsers } from '../../redux/operations';
import Button from '../../Components/ButtonLoadMore/ButtonLoadMore';
import ButtonGoBack from 'Components/ButtonBack/ButtonBack';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import UserList from '../../Components/UserCard/UserCard';
import { BtnDiv } from 'Components/ButtonBack/ButtonBack.styled';

const Tweets = () => {
  const data = useSelector(selectUsers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const ITEMS_PER_PAGE = 6;

  const tweets = data.slice(0, ITEMS_PER_PAGE * page);
  const isButtonHidden = ITEMS_PER_PAGE * page >= data.length;

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <main>
      <div
        style={{
          maxWidth: '1236px',
          margin: '0 auto',
          padding: '20px 10px',
        }}
      >
        <BtnDiv>
          <ButtonGoBack />
        </BtnDiv>
        <UserList visibleData={tweets} />
        {!isButtonHidden && <Button handleLoadMore={handleLoadMore} />}
      </div>
    </main>
  );
};
export default Tweets;
