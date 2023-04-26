import { Button } from './FollowBtn.styled';
import { useDispatch } from 'react-redux';
import { updFollower } from 'redux/operations';

const FollowBtn = ({ isFollowing, followers, id }) => {
  const dispatch = useDispatch();

  const updateSubscribe = () => {
    if (isFollowing) {
      dispatch(
        updFollower({ id, followers: followers - 1, isFollowing: false })
      );
    } else {
      dispatch(
        updFollower({ id, followers: followers + 1, isFollowing: true })
      );
    }
  };

  return (
    <Button
      className={isFollowing ? 'active' : 'open'}
      onClick={() => {
        updateSubscribe();
      }}
      type="button"
    >
      {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
    </Button>
  );
};
export default FollowBtn;
