import { Button } from '../../Pages/Tweets/Tweets.styled';
import { addFolowers } from '../../Api/Api';
const FollowBtn = ({ data, id }) => {
  const updateSubscribe = id => {
    const updObj = data.find(el => el.id === id);

    const number = updObj.followers;
    updObj.followers = number + 1;

    if (updObj) {
      console.log(updObj);
      addFolowers(id, updObj);
    }
  };

  return (
    <Button
      onClick={() => {
        updateSubscribe(id);
      }}
    >
      FOLLOW
    </Button>
  );
};
export default FollowBtn;
