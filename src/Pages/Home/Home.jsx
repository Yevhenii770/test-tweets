import { MainDiv } from './Home.styled';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Home = () => {
  return (
    <main>
      <MainDiv>
        <div>
          <PacmanLoader color="#5d44a6" size={40} />
        </div>
      </MainDiv>
    </main>
  );
};
export default Home;
