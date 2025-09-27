"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const Login = (user) => {
    setUser(user);
  };
  const Logout = (user) => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ User, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
