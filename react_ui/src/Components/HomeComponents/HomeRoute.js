/* eslint-disable */

//Depricated
import React from "react";
import { ProtectedRoute } from "../../protectedRoute";
import SideBar from "./SideBarComponent/SideBar";
import { Route } from "react-router-dom";

export const HomeRoute = ({ component: ComponentToRender, ...rest }) => {
  return <ProtectedRoute {...rest} component={ComponentToRender} />;
};

{
  /* <Route
      {...rest}
      render={props => {
        return (
          <div>
            <SideBar {...props} />
            <Component {...props} />
          </div>
        );
      }}
    /> */
}
