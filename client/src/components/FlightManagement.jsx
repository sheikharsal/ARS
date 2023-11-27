import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddFlight from "./Flight/AddFlight";
import RemoveFlight from "./Flight/RemoveFlight";
import UpdateFlight from "./Flight/UpdateFlight";
import GetAllFlights from "./Flight/GetAllFlights";

const FlightManagement = () => {
  const [addFlight, setAddFlight] = useState(false);
  const [removeFlight, setRemoveFlight] = useState(false);
  const [updateFlight, setUpdateFlight] = useState(false);
  const [getAllFlights, setGetAllFlights] = useState(false);

  const token = useSelector((store) => store.auth.token);
  if (token === null) {
    return (
      <div className="flex-row">
        <h1>It seems that your are not logged in!</h1>
        <Link to={"/auth"} className="nav-btn">
          Head over here to Login
        </Link>
      </div>
    );
  }
  const handleAddflightClick = () => {
    setAddFlight(!addFlight);
    setRemoveFlight(false);
    setUpdateFlight(false);
    setGetAllFlights(false);
  };

  const handleRemoveflightClick = () => {
    setRemoveFlight(!removeFlight);
    setAddFlight(false);
    setUpdateFlight(false);
    setGetAllFlights(false);
  };

  const handleUpdateflightClick = () => {
    setUpdateFlight(!updateFlight);
    setAddFlight(false);
    setRemoveFlight(false);
    setGetAllFlights(false);
  };

  const handleGetAllflightsClick = () => {
    setGetAllFlights(!getAllFlights);
    setAddFlight(false);
    setRemoveFlight(false);
    setUpdateFlight(false);
  };

  return (
    <div className="admin-management-page flex-column">
      <div className="admin-management-page-heading">Flight Management</div>
      <div className="admin-management-page-content">
        <button className="user-btn" onClick={() => handleAddflightClick()}>
          ADD A flight
        </button>
        <button className="user-btn" onClick={() => handleRemoveflightClick()}>
          REMOVE A flight
        </button>
        <button className="user-btn" onClick={() => handleUpdateflightClick()}>
          UPDATE A flight
        </button>
        <button className="user-btn" onClick={() => handleGetAllflightsClick()}>
          GET All Flights
        </button>
      </div>

      <div className="admin-management-page-forms">
        {addFlight && <AddFlight />}
        {removeFlight && <RemoveFlight />}
        {updateFlight && <UpdateFlight />}
        {getAllFlights && <GetAllFlights />}
      </div>
    </div>
  );
};

export default FlightManagement;
