import React, { useContext, useEffect } from "react";

import { UserContext } from "../GlobalContext/GlobalData";
import { Redirect } from "react-router-dom";

//const [user, setUser] = useContext(UserContext);

function UpdateContext(props) {
  const [user, setUser] = useContext(UserContext);

  const updateState = async user => {
    console.log("validating");
    const data = await fetch(
      `http://localhost:5000/api/token/${localStorage.getItem("token")}`
    );
    const jsonData = await data.json();

    if (!jsonData._id) {
      localStorage.clear();
      props.history.push("/");
    }
    setUser({
      _id: jsonData._id,
      firstName: jsonData.firstName,
      lastName: jsonData.lastName,
      emailId: jsonData.emailId,
      roles: jsonData.roles
    });
    props.history.push("/");
  };

  useEffect(() => {
    updateState();
  });

  return (
    <React.Fragment>
      update context
      <Redirect to="/" />
    </React.Fragment>
  );
}

export default UpdateContext;
