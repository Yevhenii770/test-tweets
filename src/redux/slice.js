import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, followUser } from './operations';

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

      .addCase(followUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(followUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users = state.users.map(user => {
          if (user.id === payload.id) {
            return {
              ...user,
              followers: payload.followers,
              isFollowing: payload.isFollowing,
            };
          }
          return user;
        });
      })
      .addCase(followUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});
