import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlights } from "./flightSlice";

const useGetFlights = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((store) => store.flight.flights);

  useEffect(() => {
    fetch("http://localhost:8080/get-all-flights")
      .then((response) => response.json())
      .then((data) => dispatch(setFlights(data)));
  }, [dispatch]);

  return rooms;
};

export default useGetFlights;
