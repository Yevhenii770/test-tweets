import {
  CardDiv,
  Ul,
  PhotoImg,
  BgPhoto,
  ContentDiv,
  Text,
  Svg,
  Ellipse,
  HorizontalLine,
} from '../../Components/UserList/UserList.styled';
import img from '../../img/picture.png';
import logo from '../../img/logo.svg';
import line from '../../img/rectangle.svg';
import ellipse from '../../img/ellipse.svg';
import FollowBtn from '../../Components/FollowButton/FollowButton';

const UserList = ({ visibleData }) => {
  return (
    <Ul>
      {visibleData.map(
        ({ id, avatar, tweets, user, followers, isFollowing }) => {
          return (
            <li key={id}>
              <CardDiv>
                <div>
                  <Svg src={logo} alt="goit" />
                  <BgPhoto src={img} alt="logo" />
                </div>
                <HorizontalLine src={line} alt="goit" />
                <Ellipse src={ellipse} alt="goit" />
                <PhotoImg src={avatar} alt={user} />
                <ContentDiv>
                  <Text>{tweets} TWEETS</Text>
                  <Text>{followers} FOLLOWERS</Text>
                </ContentDiv>
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
