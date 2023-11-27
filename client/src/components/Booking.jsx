import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../utils/bookingSlice";

const Booking = ({ flight }) => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);
  const user = token ? JSON.parse(token).user : null;
  const userId = user ? user._id : null;
  const [bookedflights, setBookedflights] = useState([]);
  const [bcs, setBcs] = useState();
  const [ecs, setEcs] = useState();
  const [fcs, setFcs] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/get-all-bookings")
      .then((data) => data.json())
      .then((data) => setBookedflights(data));
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    if (token) {
      dispatch(
        bookFlight({
          bookId: Date.now().toString(),
          flightId: flight._id,
          userId: userId,
          bcs: bcs,
          ecs: ecs,
          fcs: fcs,
        })
      );
    } else {
      alert("Please login first to book a flight");
    }
  };

  return (
    <form onSubmit={handleBook} className="form">
      <span className="justify-between">
        <label htmlFor="checkIn">Bussiness Class Seats</label>
        <input
          type="number"
          value={bcs}
          className="card-input"
          onChange={(e) => setBcs(e.target.value)}
        />
        <span>&#8377; {flight.businessClassPrice}per person</span>
      </span>

      <span className="justify-between">
        <label htmlFor="checkOut">First Class Seats</label>
        <input
          type="number"
          value={fcs}
          className="card-input"
          onChange={(e) => setEcs(e.target.value)}
        />
        <span>&#8377; {flight.firstClassPrice} per person</span>
      </span>

      <span className="justify-between">
        <label htmlFor="checkOut">Economy Class Seats</label>
        <input
          type="number"
          value={ecs}
          className="card-input"
          onChange={(e) => setEcs(e.target.value)}
        />
        <span>&#8377; {flight.economyClassPrice}per person</span>
      </span>

      <button type="submit" className="nav-btn">
        Add to cart
      </button>
    </form>
  );
};

export default Booking;
