import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderDiv, Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <HeaderDiv>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </HeaderDiv>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
