import { CardDiv, Ul, PhotoImg } from './UserCard.styled';

import FollowBtn from '../ButtonFollow/FollowButton';
import TextCard from 'Components/TextCard/TextCard';
import Logo from 'Components/LogoCard/Logo';

const UserList = ({ visibleData }) => {
  return (
    <Ul>
      {visibleData.map(
        ({ id, avatar, tweets, user, followers, isFollowing }) => {
          return (
            <li key={id}>
              <CardDiv>
                <Logo />
                <PhotoImg src={avatar} alt={user} />
                <TextCard tweets={tweets} followers={followers} />
                <FollowBtn
                  id={id}
                  isFollowing={isFollowing}
                  followers={followers}
                />
              </CardDiv>
            </li>
          );
        }
      )}
    </Ul>
  );
};

export default UserList;
