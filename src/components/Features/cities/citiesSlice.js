import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [""],
  defaultCity: "",
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
    setDefault: (state, action) => {
      state.defaultCity = action.payload;
    },
  },
});

export const cityReducer = citiesSlice.reducer;
export const citiesActions = citiesSlice.actions;
