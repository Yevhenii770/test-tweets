import { useState, useEffect } from 'react';
import { fetchUsers } from '../../Api/Api';
import {
  CardLi,
  Ul,
  PhotoImg,
  Button,
  BgPhoto,
  BgPhotoDiv,
  ContentDiv,
} from './Home.styled';
import img from '../../img/picture2 1.png';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchUsers();
      setData([...results]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Ul>
        {data.map(({ id, avatar, tweets, user, followers }) => {
          return (
            <CardLi key={id}>
              <BgPhotoDiv>
                <BgPhoto src={img} alt="logo" />
              </BgPhotoDiv>
              <ContentDiv>
                <PhotoImg src={avatar} alt={user} />
                <span>{tweets} TWEETS</span>
                <span>{followers} FOLLOWERS</span>

                <Button>FOLLOW</Button>
              </ContentDiv>
            </CardLi>
          );
        })}
      </Ul>
    </div>
  );
};
export default Home;
