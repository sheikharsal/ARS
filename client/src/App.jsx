import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Flights from "./components/Flights";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Auth from "./components/Auth";
import User from "./components/User";
import RoomManagement from "./components/FlightManagement";
import ReservationManagement from "./components/ReservationManagement";
import About from "./components/About";
import Contact from "./components/Contact";
import PassengerManagement from "./components/PassengerManagement";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/user/:id/room-management",
        element: <RoomManagement />,
      },
      {
        path: "/user/:id/passenger-management",
        element: <PassengerManagement />,
      },
      {
        path: "/user/:id/reservation-management",
        element: <ReservationManagement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
