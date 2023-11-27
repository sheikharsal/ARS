import React, { useState } from "react";
import { useFormik } from "formik";

async function addFlight(credentials) {
  return fetch("http://localhost:8080/add-flight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const validate = (values) => {
  const errors = {};

  if (!values.flightName) {
    errors.flightName = "Required";
  }

  if (!values.businessClassPrice) {
    errors.businessClassPrice = "Required";
  }

  if (!values.businessClassSeats) {
    errors.businessClassSeats = "Required";
  }

  if (!values.economyClassPrice) {
    errors.economyClassPrice = "Required";
  }

  if (!values.economyClassSeats) {
    errors.economyClassSeats = "Required";
  }

  if (!values.firstClassPrice) {
    errors.firstClassPrice = "Required";
  }

  if (!values.firstClassSeats) {
    errors.firstClassSeats = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }

  if (!values.imageUrl) {
    errors.imageUrl = "Required";
  }

  if (!values.avgRating) {
    errors.avgRating = "Required";
  }

  if (!values.startDate) {
    errors.startDate = "Required";
  }

  if (!values.endDate) {
    errors.endDate = "Required";
  }

  if (!values.startTime) {
    errors.startTime = "Required";
  }

  if (!values.endTime) {
    errors.endTime = "Required";
  }

  if (!values.departureCity) {
    errors.departureCity = "Required";
  }

  if (!values.destinationCity) {
    errors.destinationCity = "Required";
  }

  return errors;
};

const AddFlight = () => {
  const formik = useFormik({
    initialValues: {
      flightName: "",
      businessClassSeats: "",
      firstClassSeats: "",
      economyClassSeats: "",
      businessClassPrice: "",
      firstClassPrice: "",
      economyClassPrice: "",
      description: "",
      imageUrl: "",
      avgRating: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      departureCity: "",
      destinationCity: "",
    },
    validate,
    onSubmit: async (values) => {
      const token = await addFlight(values);
      console.log("Add Flight ", values, token);
      if (token !== null) {
        alert(token.message);
      }
      formik.resetForm();
    },
  });

  const departureOptions = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"]; // Updated
  const destinationOptionsCity = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"]; // Updated
  const [reqCol, setReqCol] = useState({});

  const req = {
    border: "1px solid red",
    borderRadius: "10px",
  };
  return (
    <div className="add-employee">
      <form onSubmit={formik.handleSubmit} className="form">
        <h2>ADD A FLIGHT</h2>
        <input
          id="flightName"
          name="flightName"
          type="text"
          placeholder="Air Asia S1128"
          className="select-box"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.flightName}
        />
        {formik.errors.flightName ? (
          <div>{formik.errors.flightName}</div>
        ) : null}

        <input
          id="avgRating"
          name="avgRating"
          type="number"
          placeholder="avgRating"
          className="select-box"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.avgRating}
        />
        {formik.errors.avgRating ? <div>{formik.errors.avgRating}</div> : null}

        <div className="two-inputs">
          <input
            id="startDate"
            name="startDate"
            type="date"
            placeholder="startDate"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startDate}
          />
          {formik.errors.startDate ? (
            <div>{formik.errors.startDate}</div>
          ) : null}

          <input
            id="startTime"
            name="startTime"
            type="time"
            placeholder="startTime"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startTime}
          />
          {formik.errors.startTime ? (
            <div>{formik.errors.startTime}</div>
          ) : null}
        </div>

        <div className="two-inputs">
          <input
            id="endDate"
            name="endDate"
            type="date"
            placeholder="endDate"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endDate}
          />
          {formik.errors.endDate ? <div>{formik.errors.endDate}</div> : null}

          <input
            id="endTime"
            name="endTime"
            type="time"
            placeholder="endTime"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endTime}
          />
          {formik.errors.endTime ? <div>{formik.errors.endTime}</div> : null}
        </div>
        <div className="two-inputs">
          <input
            id="businessClassSeats"
            name="businessClassSeats"
            type="number"
            placeholder="businessClassSeats"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businessClassSeats}
          />
          {formik.errors.businessClassSeats ? (
            <div>{formik.errors.businessClassSeats}</div>
          ) : null}

          <input
            id="businessClassPrice"
            name="businessClassPrice"
            type="number"
            placeholder="businessClassPrice"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businessClassPrice}
          />
          {formik.errors.businessClassPrice ? (
            <div>{formik.errors.businessClassPrice}</div>
          ) : null}
        </div>

        <div className="two-inputs">
          <input
            id="firstClassSeats"
            name="firstClassSeats"
            type="number"
            placeholder="firstClassSeats"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstClassSeats}
          />
          {formik.errors.firstClassSeats ? (
            <div>{formik.errors.firstClassSeats}</div>
          ) : null}

          <input
            id="firstClassPrice"
            name="firstClassPrice"
            type="number"
            placeholder="firstClassPrice"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstClassPrice}
          />
          {formik.errors.firstClassPrice ? (
            <div>{formik.errors.firstClassPrice}</div>
          ) : null}
        </div>

        <div className="two-inputs">
          <input
            id="economyClassSeats"
            name="economyClassSeats"
            type="number"
            placeholder="economyClassSeats"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.economyClassSeats}
          />
          {formik.errors.economyClassSeats ? (
            <div>{formik.errors.economyClassSeats}</div>
          ) : null}

          <input
            id="economyClassPrice"
            name="economyClassPrice"
            type="number"
            placeholder="economyClassPrice"
            className="select-box"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.economyClassPrice}
          />
          {formik.errors.economyClassPrice ? (
            <div>{formik.errors.economyClassPrice}</div>
          ) : null}
        </div>

        <select
          id="departureCity"
          name="departureCity"
          className="select-box"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.departureCity}
        >
          <option value="" label="Select Departure" />
          {departureOptions.map((city) => (
            <option key={city} value={city} label={city} />
          ))}
        </select>
        {formik.errors.departureCity ? (
          <div>{formik.errors.departureCity}</div>
        ) : null}

        <select
          id="destinationCity"
          name="destinationCity"
          className="select-box"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.destinationCity}
        >
          <option value="" label="Select DestinationCity" />
          {destinationOptionsCity.map((city) => (
            <option key={city} value={city} label={city} />
          ))}
        </select>
        {formik.errors.destinationCity ? (
          <div>{formik.errors.destinationCity}</div>
        ) : null}

        <input
          id="description"
          name="description"
          placeholder="description"
          type="text"
          className="select-box"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}

        <input
          id="imageUrl"
          name="imageUrl"
          placeholder="https://via.placeholder.io/150"
          type="url"
          className="select-box"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
        />
        {formik.errors.imageUrl ? <div>{formik.errors.imageUrl}</div> : null}

        <button type="submit" className="nav-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFlight;
