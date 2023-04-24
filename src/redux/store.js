import { configureStore } from '@reduxjs/toolkit';
// import tweetsReducer from './userSlice';

export const store = configureStore({
  reducer: {
    // tweets: tweetsReducer,
  },
});
