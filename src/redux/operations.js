import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64450bb0b80f57f581aff67e.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/users`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updFollower = createAsyncThunk(
  'users/updUsers',
  async ({ id, followers, isFollowing }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers,
        isFollowing,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
