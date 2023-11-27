import { createSlice } from "@reduxjs/toolkit";

export const flightSlice = createSlice({
  name: "flight",
  initialState: {
    flights: [],
  },
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
  },
});

export const { setFlights } = flightSlice.actions;

export default flightSlice.reducer;
