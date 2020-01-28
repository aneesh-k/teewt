import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    token: "",
    roles: [],
    emailId: ""
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
