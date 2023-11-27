import { useDispatch } from "react-redux";
import { removeBooking } from "../utils/bookingSlice";
import useGetFlights from "../utils/useGetFlights";

const CartItemCard = ({ bookId, flightId, userId, bcs, ecs }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeBooking(bookId));
  };
  const flights = useGetFlights();
  const flight = flights.filter((oneflight) => {
    return oneflight._id === flightId;
  });

  return (
    <div className="cart-card">
      <div>
        <h2>{flight[0]?.flightName}</h2>
        <p>{flight[0]?.description}</p>
        <p> &#8377; {flight[0]?.price}</p>
        <p> flight Id: {flightId}</p>
        <p>
          Business Class Seats: {bcs}
          {", "} Economy Class Seats: {ecs}
        </p>
      </div>
      <div className="flex-column">
        <img src={flight[0].imageUrl} alt="" />
        <button className="menu-btn" onClick={() => handleRemoveItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
