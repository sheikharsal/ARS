import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import bookingSlice from "./bookingSlice";
import flightSlice from "./flightSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    booking: bookingSlice,
    flight: flightSlice,
  },
});

export default store;
