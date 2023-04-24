import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, followUser } from './operations';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
});
