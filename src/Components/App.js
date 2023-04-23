import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Tweets = lazy(() => import('./Pages/Tweets/Tweets'));

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
