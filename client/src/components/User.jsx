import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import UserGetAllRoomsCard from "./UserGetAllRoomsCard";
import AVATAR from "../assests/images/avatar.png";

const User = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState();
  const [getAllBookings, setGetAllBookings] = useState(false);
  const token = useSelector((store) => store.auth.token);
  const user = token ? JSON.parse(token).user : null;
  const userName = user ? user.name : null;
  const userId = user ? user._id : null;
  const userEmail = user ? user.email : null;
  console.log("User => ", token);

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
  useEffect(() => {
    async function getAllBookings() {
      const response = await fetch(process.env.REACT_APP_API_URL + "/get-all-bookings");
      const data = await response.json();

      const userRooms = data.filter((booking) => {
        return booking.userId === userId;
      });
      setBookings(userRooms);
    }
    getAllBookings();
  }, []);
  const handleSeeBooking = () => {
    setGetAllBookings(!getAllBookings);
  };

  return (
    <div className="user">
      <div className="flex-row">
        <div className="user-card room-card">
          <img src={AVATAR} alt="user" />
          <p>{userName}</p>
          <p>{userEmail}</p>
        </div>

        {userEmail === "arsal18@gmail.com" ? (
          // Admin
          <div className="user-functions flex-row">
            <div className="flex-column">
              <Link to="passenger-management" className="user-btn">
                Passenger Management
              </Link>
              <Link to="room-management" className="user-btn">
                Flights Management
              </Link>
            </div>
            <div className="flex-column">
              <Link to="reservation-management" className="user-btn">
                Reservation Management
              </Link>
              <button className="user-btn" onClick={() => handleSeeBooking()}>
                See my bookings
              </button>
            </div>
          </div>
        ) : (
          // User
          <div className="user-functions">
            <button className="user-btn" onClick={() => handleSeeBooking()}>
              See my bookings
            </button>
          </div>
        )}
      </div>
      {getAllBookings &&
        (bookings?.length === 0 ? (
          <div className="flex-row">
            <h1>It seems that your have not booked any flights!</h1>
            <Link to={"/flights"} className="nav-btn">
              Head over here to Book a Flight
            </Link>
          </div>
        ) : (
          bookings?.map((bookedFlight) => (
            <UserGetAllRoomsCard key={bookedFlight._id} {...bookedFlight} />
          ))
        ))}
    </div>
  );
};

export default User;
