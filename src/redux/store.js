import { configureStore } from '@reduxjs/toolkit';
import { tweetsSlice } from './slice';

export const store = configureStore({
  reducer: {
    tweets: tweetsSlice.reducer,
  },
});
