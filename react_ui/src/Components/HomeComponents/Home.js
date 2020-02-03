/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

import SideBar from "./SideBarComponent/SideBar";
import SearchUser from "./UserComponent/SearchUsers";

import dotenv from "dotenv";

import "./Home.css";
import { Route } from "react-router-dom";

//import { useSelector } from "react-redux";

const Home = () => {
  dotenv.config();
  return (
    <div className="main">
      Reach out to the{" "}
      <Link to={process.env.PUBLIC_URL + "/Profile/index.html"} target="_blank">
        Developer
      </Link>{" "}
      for complete product
    </div>
  );
};

export default Home;
