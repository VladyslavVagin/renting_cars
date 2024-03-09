import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
    reducer: {
      cars: carsReducer,
      auth: authReducer
    }
  });