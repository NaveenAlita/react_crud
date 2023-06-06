import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

export default function UserListing() {
  const navigate = useNavigate();
  const { users, deleteUser, editUserHandler } = useContext(UserContext);

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center">
        <b>User Listing Page</b>
      </h2>
      <button onClick={() => navigate("/add-user")} className="btn btn-primary">
        Add User
      </button>
      <table className="table table-light table-striped">
        <thead className="table-active">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length ? (
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        editUserHandler(user.id);
                        navigate("/edit-user");
                      }}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6}>No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
