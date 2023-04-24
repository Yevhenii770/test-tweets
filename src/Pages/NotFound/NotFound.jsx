import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Упс :( cтраница не найдена...</h1>
      <p>
        Может быть вы имели ввиду: <Link to="/">Home</Link>
      </p>
    </div>
  );
};
export default NotFound;
