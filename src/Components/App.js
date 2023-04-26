import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
const Home = lazy(() => import('../Pages/Home/Home'));
const Tweets = lazy(() => import('../Pages/Tweets/Tweets'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
