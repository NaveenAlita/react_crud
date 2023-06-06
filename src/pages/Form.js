import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import "bootstrap/dist/css/bootstrap.css";

export default function Form() {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const user = {
      id: Math.random(),
      name: formData.name,
      email: formData.email,
      gender: formData.gender,
      status: formData.status,
    };
    addUser(user);
    setFormData({
      name: "",
      email: "",
      gender: "",
      status: "",
    });
    navigate("/");
  };

  const validateForm = () => {
    const validationErrors = {};

    if (formData.name.trim() === "") {
      validationErrors.name = "*Name is required";
    }

    if (formData.email.trim() === "") {
      validationErrors.email= "*Email is required";
    } 

    if (formData.gender === "") {
      validationErrors.gender = "*Gender is required";
    }

    if (formData.status === "") {
      validationErrors.status = "*Status is required";
    }

    return validationErrors;
  };


  return (
    <div className="container">
      <h2>
        <b>Add User</b>
      </h2>
      <form onSubmit={handleSubmit}>
      <br></br>
        <div className="text-center">
          {errors.name && (
            <span className="error" style={{ color: "red" }}>
              {errors.name}
            </span>
          )}
          <br></br>
          <label className="form-label">
            <b>NAME: </b>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          {errors.email && (
            <span className="error" style={{ color: "red" }}>
              {errors.email}
            </span>
          )}
          <br></br>
          <label className="form-label">
            <b>EMAIL: </b>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          {errors.gender && (
            <span className="error" style={{ color: "red" }}>
              {errors.gender}
            </span>
          )}
          <br></br>
          <label className="form-label">
            <b> GENDER: </b>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            <b>Male</b>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            <b>Female</b>
          </label>
          <br></br>
          {errors.status && (
            <span className="error" style={{ color: "red" }}>
              {errors.status}
            </span>
          )}
          <br></br>
          <label className="form-label">
            <b>STATUS: </b>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => navigate(`/`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
