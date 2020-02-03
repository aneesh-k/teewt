/* eslint-disable */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { UserContext } from "../../../GlobalContext/GlobalData";

const SideBar = () => {
  const [users, setUsers] = useContext(UserContext);
  return (
    <div>
      <div className="sidenav">
        <div>
          <br />
          <h1> </h1>
        </div>
        <div className="sidebarLinks">
          {["admin"].includes(users.roles[0]) ? (
            <Link to="/home/users">Users</Link>
          ) : (
            <></>
          )}
        </div>
        <div className="sidebarLinks">
          <Link to="/services">Services</Link>
        </div>
        <div className="sidebarLinks">
          {["admin", "manager"].includes(users.roles[0]) ? (
            <Link to="#customers">Customers -unavailable</Link>
          ) : (
            <></>
          )}
        </div>
        <div className="sidebarLinks">
          <Link to="/chef">Chef Services</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
