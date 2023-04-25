import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updFollower } from './operations';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(updFollower.pending, state => {
        state.isLoading = true;
      })
      .addCase(updFollower.fulfilled, (state, { payload }) => {
        state.users = state.users.map(user => {
          if (user.id === payload.id) {
            return {
              ...user,
              isFollowing: payload.isFollowing,
              followers: payload.followers,
            };
          }
          return user;
        });
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updFollower.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});
