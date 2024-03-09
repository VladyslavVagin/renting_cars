import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

const initialState = {
    user: {name: null, email: null, id: null},
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
          .addCase(register.pending, state => {
            state.isLoading = true;
          }).addCase(register.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
          })
          .addCase(register.rejected, state => {
            state.isLoading = false;
          }).addCase(logIn.pending, state => {
            state.isLoading = true;
          })
          .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isLoading = false;
          })
          .addCase(logIn.rejected, state => {
            state.isLoading = false;
          })
  }})

  export const authReducer = authSlice.reducer;