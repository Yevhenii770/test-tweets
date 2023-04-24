import { useState, useEffect } from 'react';
import { fetchUsers, addFolowers } from '../../Api/Api';
import {
  CardDiv,
  Ul,
  PhotoImg,
  Button,
  BgPhoto,
  ContentDiv,
  Text,
  Svg,
  BtnLoadMore,
  BtnDiv,
  Ellipse,
  HorizontalLine,
} from './Tweets.styled';
import img from '../../img/picture2 1.png';
import logo from '../../img/logo.svg';
import line from '../../img/rectangle.svg';
import ellipse from '../../img/ellipse.svg';

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
    <main>
      <div
        style={{
          maxWidth: '1236px',
          margin: '0 auto',
          padding: '10px 10px',
        }}
      >
        <Ul>
          {tweets.map(({ id, avatar, tweets, user, followers }) => {
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
                  <Button
                    onClick={() => {
                      updateSubscribe(id);
                    }}
                  >
                    FOLLOW
                  </Button>
                </CardDiv>
              </li>
            );
          })}
        </Ul>
        {!isButtonHidden && (
          <BtnDiv>
            <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
          </BtnDiv>
        )}
      </div>
    </main>
  );
};
export default Tweets;
