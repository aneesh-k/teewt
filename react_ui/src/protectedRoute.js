import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "./Components/FooterComponent/Footer";
import Nav from "./Components/NavComponent/Nav";
import UpdateContext from "./Components/UpdateContext";
import SideBar from "./Components/HomeComponents/SideBarComponent/SideBar";

import { UserContext } from "./GlobalContext/GlobalData";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useContext(UserContext);

  const updateState = async user => {
    console.log("validating");
    const data = await fetch(
      `http://localhost:5000/api/token/${localStorage.getItem("token")}`
    );
    const jsonData = await data.json();

    if (!jsonData._id) {
      localStorage.clear();
    }
    setUser({
      _id: jsonData._id,
      firstName: jsonData.firstName,
      lastName: jsonData.lastName,
      emailId: jsonData.emailId,
      roles: jsonData.roles
    });
  };

  useEffect(() => {
    if (user._id == "") {
      updateState();
    }
  }, []);

  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return (
            <div>
              <Nav {...props} />
              <SideBar />
              <Component {...props} />
              {/* <Footer /> */}
            </div>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
