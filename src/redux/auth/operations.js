import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e7912253d564627a8f0361.mockapi.io/cars';

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users', credentials);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );