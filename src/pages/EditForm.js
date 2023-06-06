import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

export default function EditForm() {
  const navigate = useNavigate();
  const { editUser, updateUserHandler } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(editUser);
  }, [editUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserHandler(formData);
    setFormData({
      name: "",
      email: "",
      gender: "",
      status: "",
    });
    navigate("/");
  };

  return (
    <div className="container">
    <h2>
      <b>Update User</b>
    </h2>
    <form onSubmit={handleSubmit}>
      <div className="text-center">
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
          Update
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
