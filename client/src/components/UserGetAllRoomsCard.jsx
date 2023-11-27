import useGetFlights from "../utils/useGetFlights";

const UserGetAllflightsCard = ({ bookId, flightId, userId }) => {
  const flights = useGetFlights();
  const flight = flights?.filter((oneflight) => {
    return oneflight?._id === flightId;
  });

  const handleCheckOut = async () => {
    try {
      // delete this booked flight
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/delete-booking/${bookId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Reload the page to reflect the changes
        alert("Check Out success!!!");
      } else {
        throw new Error("Failed to delete the booking");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cart-card">
      <div>
        <h2>{flight[0]?.flightName}</h2>
        <p>{flight[0]?.description}</p>
        <p> &#8377; {flight[0]?.price}</p>
        <p> Flight Id: {flightId}</p>
        <p>
          Departure City: {flight[0]?.departureCity}, Destination City:{" "}
          {flight[0]?.destinationCity}
        </p>
      </div>
      <div className="flex-column">
        <img src={flight[0]?.imageUrl} alt="" />
        <button className="menu-btn" onClick={() => handleCheckOut()}>
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default UserGetAllflightsCard;
