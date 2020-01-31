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
        {["admin"].includes(users.roles[0]) ? (
          <Link to="/home/users">Users</Link>
        ) : (
          <></>
        )}

        <a href="#services">Services</a>
        {["admin", "manager"].includes(users.roles[0]) ? (
          <Link to="/home/customers">Customers</Link>
        ) : (
          <></>
        )}
        <a href="#contact">Chef</a>
      </div>
    </div>
  );
};

export default SideBar;
