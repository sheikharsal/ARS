import React from "react";
import { useFormik } from "formik";

async function removeFlight(id) {
  return fetch(`http://localhost:8080/remove-flight/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

const validate = (values) => {
  const errors = {};

  if (!values.id) {
    errors.id = "Required";
  }

  return errors;
};

const RemoveFlight = () => {
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await removeFlight(values.id);
        alert(response);
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="register">
      <form onSubmit={formik.handleSubmit} className="form">
        <h2>REMOVE A FLIGHT</h2>
        <input
          id="id"
          name="id"
          type="text"
          placeholder="_id"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.id}
        />
        {formik.errors.id ? <div>{formik.errors.id}</div> : null}

        <button type="submit" className="nav-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RemoveFlight;
