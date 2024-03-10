import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredCars, fetchCars, addCardToFavorite, removeCardFromFavorite } from "./operations";

const initialState = {
  cars: [],
  filteredCars: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
  };

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...payload];
        state.filteredCars = [];
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchFilteredCars.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.filteredCars = payload;
      })
      .addCase(fetchFilteredCars.pending, handlePending)
      .addCase(fetchFilteredCars.rejected, handleRejected)
      .addCase(addCardToFavorite.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = [...state.favorites, ...payload];
      })
      .addCase(addCardToFavorite.pending, handlePending)
      .addCase(addCardToFavorite.rejected, handleRejected)
      .addCase(removeCardFromFavorite.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = payload;
      })
      .addCase(removeCardFromFavorite.pending, handlePending)
      .addCase(removeCardFromFavorite.rejected, handleRejected)
  }
})
export const carsReducer = carsSlice.reducer;
