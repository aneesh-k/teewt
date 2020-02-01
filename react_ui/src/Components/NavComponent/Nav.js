/* eslint-disable */

import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../GlobalContext/GlobalData";

import "../NavComponent/Nav.css";

export default function Nav(props) {
  const onLogout = e => {
    e.preventDefault();
    localStorage.clear();
    props.history.push("/");
  };

  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark padd">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <div
              className="nav-item justify-content-centre"
              style={{ color: "#ffffff" }}
            >
              <div className="nav-link">Welcome {user.firstName}!</div>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={process.env.PUBLIC_URL + "/Profile/index.html"}
                  target="_blank"
                >
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <button
                  onClick={onLogout}
                  type="button"
                  className="btn btn-outline-success"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="padd">
        <h1>
          {" "}
          <br />
        </h1>
      </div>
    </div>
  );
}
