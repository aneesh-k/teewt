import React, { useEffect } from "react";
import "./DisplayUser.css";

const DisplayUser = props => {
  const assignRoles = async e => {
    console.log(e.target.value);
    const bodyJson = JSON.stringify({
      roles: [e.target.value]
    });
    console.log(bodyJson);
    //const users =
    fetch("http://localhost:5000/api/user/update?id=" + props.users._id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: bodyJson
    })
      .then(async res => console.log(await res.json()))
      .catch(err => console.log("err"));
  };

  return (
    <ul className="list-group list-group-horizontal-sm">
      <li className="list-group-item">{props.users.firstname}</li>
      <li className="list-group-item">{props.users.lastname}</li>
      <li className="list-group-item">{props.users.emailId}</li>
      <li className="list-group-item">
        <select
          className="custom-select"
          id="inputGroupSelect03"
          onChange={assignRoles}
        >
          <option value={props.users.roles[0]}>{props.users.roles[0]}</option>
          <option value="admin">admin</option>
          <option value="staff">staff</option>
        </select>
      </li>
    </ul>
  );
};

export default DisplayUser;
