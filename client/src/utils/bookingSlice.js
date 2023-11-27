import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
  },
  reducers: {
    bookFlight: (state, action) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.bookId !== action.payload
      );
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { bookFlight, removeBooking, clearBookings } =
  bookingSlice.actions;

export default bookingSlice.reducer;
