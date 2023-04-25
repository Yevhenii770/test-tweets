import { useState, useEffect } from 'react';
import { fetchUsers } from '../../redux/operations';
import LoadMoreBtn from '../../Components/ButtonLoadMore/ButtonLoadMore';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import UserList from '../../Components/UserCard/UserCard';

const Tweets = () => {
  const data = useSelector(selectUsers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const ITEMS_PER_PAGE = 3;

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
          padding: '10px 10px',
        }}
      >
        <Link>Go Back</Link>
        <UserList visibleData={tweets} />
        {!isButtonHidden && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      </div>
    </main>
  );
};
export default Tweets;
