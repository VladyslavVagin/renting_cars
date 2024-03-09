import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    make: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.make = action.payload;
        }
    }
})

export const {setQuery} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;