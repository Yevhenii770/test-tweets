import { useState, useEffect } from 'react';
import { fetchUsers } from '../../Api/Api';
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
} from './Tweets.styled';
import img from '../../img/picture.png';
import logo from '../../img/logo.svg';
import line from '../../img/rectangle.svg';
import ellipse from '../../img/ellipse.svg';
import LoadMoreBtn from '../../Components/ButtonLoadMore/LoadMore';
import FollowBtn from '../../Components/ButtonFollow/Follow';
const Tweets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchUsers();
        setData([...results]);
      } catch {}
    };
    fetchData();
  }, []);

  const [page, setPage] = useState(1);
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
                  <FollowBtn data={data} id={id} />
                </CardDiv>
              </li>
            );
          })}
        </Ul>
        {!isButtonHidden && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      </div>
    </main>
  );
};
export default Tweets;
