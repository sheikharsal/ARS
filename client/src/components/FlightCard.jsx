import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { AiTwotoneStar } from "react-icons/ai";

const FlightCard = ({
  flightName,
  imageUrl,
  businessClassPrice,
  avgRating,
  description,
}) => {
  const ratingColor = "#ffffff";

  return (
    <div className="room">
      <img src={imageUrl} alt="room" />
      <h2>{flightName}</h2>
      <div className="card-content">
        <h4
          className="rating"
          style={{
            backgroundColor: ratingColor,
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <AiTwotoneStar /> {avgRating}
        </h4>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default FlightCard;
