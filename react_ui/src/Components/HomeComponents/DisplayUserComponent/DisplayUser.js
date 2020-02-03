/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./DisplayUser.css";

const DisplayUser = props => {
  const [loading, setLoading] = useState(false);
  const assignRoles = async e => {
    setLoading(true);
    console.log(e.target.value);
    const bodyJson = JSON.stringify({
      roles: [e.target.value]
    });
    console.log(bodyJson);
    //const users =

    try {
      const resultData = await fetch(
        "http://localhost:5000/api/user/update?id=" + props.users._id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("token")
          },
          body: bodyJson
        }
      );
      // .then(async res => {
      //   console.log(await res.json());
      //   setLoading(false);
      // })
      // .catch(err => {
      //   console.log("err");
      //   setLoading(false);
      // });

      const resultJson = await resultData.json();
      setLoading(false);
    } catch {
      console.log("err");
      setLoading(false);
    }
  };

  let loader;
  if (loading) {
    loader = (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    loader = null;
  }

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
          <option value="manager">manager</option>
          <option value="staff">staff</option>
          <option value="chef">chef</option>
        </select>
      </li>
      {loader}
    </ul>
  );
};

export default DisplayUser;
