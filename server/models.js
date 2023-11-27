const mongoose = require("mongoose");

// Define User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define Flight schema
const flightSchema = new mongoose.Schema({
  flightName: { type: String, required: true },
  businessClassSeats: { type: Number, required: true },
  firstClassSeats: { type: Number, required: true },
  economyClassSeats: { type: Number, required: true },
  businessClassPrice: { type: Number, required: true },
  firstClassPrice: { type: Number, required: true },
  economyClassPrice: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  avgRating: { type: String, default: 4 },
  startDate: { type: String, default: Date.now },
  endDate: { type: String, default: Date.now },
  startTime: { type: String, default: Date.now },
  endTime: { type: String, default: Date.now },
  departureCity: { type: String, required: true }, // Updated to include departure city
  destinationCity: { type: String, required: true }, // Updated to include destination city
});

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  joiningDate: { type: Date, default: Date.now },
  presentToday: { type: Boolean, default: false },
});

const bookingSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  flightId: {
    type: String,
    required: true,
  },
  userId: { type: String, required: true },
  // seatClass: {
  //   type: String,
  //   enum: ["business", "first", "economy"],
  //   required: true,
  // },
  // numberOfSeats: { type: Number, required: true },
  ecs: { type: Number, required: false },
  bcs: { type: Number, required: false },
});

// const bookingSchema = new mongoose.Schema({
//   bookId: { type: String },
//   roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   checkIn: { type: Date, required: true },
//   checkOut: { type: Date, required: true },
// });

// Create Booking model
const Booking = mongoose.model("Booking", bookingSchema);

// Create Employee model
const Employee = mongoose.model("Employee", employeeSchema);

// Create User model
const User = mongoose.model("User", userSchema);

// Create Room model
const Flight = mongoose.model("Flight", flightSchema);

module.exports = {
  User,
  Flight,
  Employee,
  Booking,
};
