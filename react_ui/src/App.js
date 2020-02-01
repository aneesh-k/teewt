/* eslint-disable */

import React from "react";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import { HomeRoute } from "./Components/HomeComponents/HomeRoute";

import Register from "./Components/RegisterComponents/Register";
import Login from "./Components/LoginComponents/Login";
import Home from "./Components/HomeComponents/Home";
import Contact from "./Components/ContactComponent/Contact";
import UpdateContext from "./Components/UpdateContext";
import SearchUser from "./Components/HomeComponents/UserComponent/SearchUsers";

import { UserProvider } from "./GlobalContext/GlobalData";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <Routers>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <ProtectedRoute exact path="/validating" component={UpdateContext} />

          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/home/users" component={SearchUser} />
          <ProtectedRoute exact path="/contact" component={Contact} />
        </Switch>
      </Routers>
    </UserProvider>
  );
}

export default App;
