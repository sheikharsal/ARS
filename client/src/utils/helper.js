import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import useGetFlights from "./useGetFlights";

export const useTotalCost = () => {
  const bookedItems = useSelector((store) => store.booking.bookings);
  const flights = useGetFlights();
  let price = 0;

  console.log("Cart: ", bookedItems);
  bookedItems.map((bookedFlight) => {
    const flight = flights.filter((oneFlight) => {
      return oneFlight._id === bookedFlight.flightId;
    });

    // calculate the total cost for this booking
    console.log("Flight: ", flight);

    price += flight[0].price * bookedFlight.bcs;
    price += flight[0].price * bookedFlight.ecs;
  });

  return price;
};

// logic to push the bookingSlice to the database book-room api
export const usePushCartToDatabase = async () => {
  const bookings = useSelector((state) => state.booking.bookings);

  const response = await fetch(process.env.REACT_APP_API_URL + "/book-room", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bookings }),
  });

  if (response.ok) {
    return true;
  } else {
    return false;
  }
};
