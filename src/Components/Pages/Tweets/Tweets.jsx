import { useState, useEffect } from 'react';
import { fetchUsers, addFolowers } from '../../Api/Api';
import {
  CardLi,
  Ul,
  PhotoImg,
  Button,
  BgPhoto,
  BgPhotoDiv,
  ContentDiv,
} from './Tweets.styled';
import img from '../../img/picture2 1.png';

const Tweets = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchUsers();
        setData([...results]);
      } catch {}
    };
    fetchData();
  }, []);

  /// пагинация
  const ITEMS_PER_PAGE = 3;
  const updateSubscribe = id => {
    const updObj = data.find(el => el.id === id);

    const number = updObj.followers;
    updObj.followers = number + 1;

    if (updObj) {
      console.log(updObj);
      addFolowers(id, updObj);
    }
  };
  const tweets = data.slice(0, ITEMS_PER_PAGE * page);
  const isButtonHidden = ITEMS_PER_PAGE * page >= data.length;
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  ///

  return (
    <div>
      <Ul>
        {tweets.map(({ id, avatar, tweets, user, followers }) => {
          return (
            <CardLi key={id}>
              <div>
                <BgPhotoDiv>
                  <div>
                    <BgPhoto src={img} alt="logo" />
                  </div>
                </BgPhotoDiv>
                <PhotoImg src={avatar} alt={user} />
                <ContentDiv>
                  <p>{tweets} TWEETS</p>
                  <p>{followers} FOLLOWERS</p>
                </ContentDiv>
                <Button
                  onClick={() => {
                    updateSubscribe(id);
                  }}
                >
                  FOLLOW
                </Button>
              </div>
            </CardLi>
          );
        })}
      </Ul>
      {!isButtonHidden && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};
export default Tweets;
