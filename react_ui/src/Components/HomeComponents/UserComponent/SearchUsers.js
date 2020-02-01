/* eslint-disable */

import React, { useState, useContext, useEffect } from "react";

import { UserContext } from "../../../GlobalContext/GlobalData";

import DisplayUser from "../DisplayUserComponent/DisplayUser";
import Loading from "../Loading";

import "../Home.css";
import "./SearchUsers.css";

const SearchUser = props => {
  const [input, setInput] = useState("");
  const [userData, SetUserData] = useState();
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const initial = async val => {
    setLoading(true);
    const fetchData = await fetch(
      "http://localhost:5000/api/search?email=" + val,
      {
        headers: {
          "auth-token": localStorage.getItem("token")
        }
      }
    );
    const data = await fetchData.json();
    SetUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user.roles[0] !== "admin") {
      props.history.push("/");
    }
    initial("");
  }, []);

  const onInputChange = async events => {
    setInput(events.target.value);
    initial(events.target.value);
  };

  const getUsers = async () => {
    console.log(userData);
  };

  let data;
  if (userData === undefined) {
    data = <div></div>;
  } else {
    data = userData.map(r => <DisplayUser key={r._id} users={r} />);
  }

  return (
    <div className="main">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Email Id"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={onInputChange}
        />
        <div className="input-group-append"></div>
      </div>

      <ul className="list-group list-group-horizontal-sm">
        <li className="list-group-item list-group-items">First Name</li>
        <li className="list-group-item list-group-items">Last Name</li>
        <li className="list-group-item list-group-items">Email Id</li>
        <li className="list-group-item list-group-items">Assign Roles</li>
      </ul>
      {loading ? <Loading /> : <></>}
      {data}
    </div>
  );
};

export default SearchUser;
