import React from "react";
import FlightCard from "../FlightCard";
import useGetFlights from "../../utils/useGetFlights";

const GetAllFlights = () => {
  const flights = useGetFlights();

  return (
    <div className="flex-row">
      {flights?.map((flight) => (
        <div key={flight._id} className="room-card">
          <FlightCard
            flightName={flight.flightName}
            imageUrl={flight.imageUrl}
            price={flight.price}
            avgRating={flight.avgRating}
            description={flight.description}
          />
        </div>
      ))}
    </div>
  );
};

export default GetAllFlights;
