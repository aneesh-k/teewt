import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "./Components/FooterComponent/Footer";
import Nav from "./Components/NavComponent/Nav";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return (
            <div>
              <Nav {...props} />
              <Component {...props} />
              <Footer />
            </div>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
