import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e7912253d564627a8f0361.mockapi.io/cars';

// ============================== GET ALL CARS FROM DATA BASE
export const fetchCars = createAsyncThunk('cars/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await axios.get('/advert');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }})