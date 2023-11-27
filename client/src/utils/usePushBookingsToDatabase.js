import { useSelector } from "react-redux";

const usePushBookingsToDatabase = () => {
  const bookings = useSelector((state) => state.booking.bookings);

  const pushCartToDatabase = async () => {
    const validBookings = bookings.map((booking) => ({
      bookId: booking.bookId,
      flightId: booking.flightId,
      userId: booking.userId,
      // departureCity: booking.departureCity,
      // destinationCity: booking.destinationCity,
    }));

    const response = await fetch("http://localhost:8080/book-flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validBookings),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  };

  return pushCartToDatabase;
};

export default usePushBookingsToDatabase;
