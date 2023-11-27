import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightCard from "./FlightCard";
import Booking from "./Booking";
import useGetAvailableFlights from "../utils/useGetAvailableFlights";

const Flights = () => {
  const flights = useGetAvailableFlights();
  const [departureCity, setDepartureCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);

  const departureOptions = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"]; // Updated
  const destinationOptions = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"]; // Updated

  let flights2 = flights.filter((flight) => {
    return (
      flight.departureCity === departureCity &&
      flight.destinationCity === destinationCity
    );
  });
  if (departureCity === null || destinationCity === null) {
    flights2 = flights;
  }
  console.log("Flights1: ", flights);
  console.log("Flights2: ", flights2);
  return (
    <div className="flex-column">
      <div className="flex-row">
        <select
          id="departureCity"
          name="departureCity"
          className="select-box"
          onChange={(e) => setDepartureCity(e.target.value)}
          value={departureCity}
        >
          <option value="" label="Select Departure" />
          {departureOptions.map((city) => (
            <option key={city} value={city} label={city} />
          ))}
        </select>

        <select
          id="destinationCity"
          name="destinationCity"
          className="select-box"
          onChange={(e) => setDestinationCity(e.target.value)}
          value={destinationCity}
        >
          <option value="" label="Select Destination" />
          {destinationOptions.map((city) => (
            <option key={city} value={city} label={city} />
          ))}
        </select>
      </div>
      <div className="flex-row">
        {flights2.length !== 0 ? (
          flights2?.map((flight) => (
            <div key={flight?._id} className="room-card">
              <FlightCard {...flight} />
              <Booking flight={flight} />
            </div>
          ))
        ) : (
          <div>
            <h3 style={{ fontSize: "1.7rem" }}>
              No flights availabe for {departureCity} to {destinationCity}.{" "}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;

// Flights Images
// data:image/jpeg;base64,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
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaOOK9ZSYcuaaAStqrJ_sjrCE5YEz5G4cmw
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsc7KuMhcJbGbxF2DMXgE0_jlkkn7wUSDEhueaLfjB57GgGJBMFSYJVbWgMTjZIFdJs9Q
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1lZAazcV54Vl7IBdSkIfK7TGnkGW7FZVyJKxR9AcUdVnI_9WpmiRkcWuhkXV-RRSq_8
// https://i.postimg.cc/cHPcMp5m/double-non-ac.jpg
