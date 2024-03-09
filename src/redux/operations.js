import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e7912253d564627a8f0361.mockapi.io/cars';

// ============================== GET CARS PER PAGE FROM MOCKAPI
export const fetchCars = createAsyncThunk('cars/fetchPerPage', 
async ({page, limit}, thunkAPI) => {
    try {
        const response = await axios.get(`/advert?page=${page}&limit=${limit}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }})

    // ============================== GET FILTERED CARS FROM MOCKAPI
    export const fetchFilteredCars = createAsyncThunk('cars/fetchFiltered',
      async ({filter}, thunkAPI) => {
        try {
            const response = await axios.get(`/advert?filter=${filter}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
      }
    )