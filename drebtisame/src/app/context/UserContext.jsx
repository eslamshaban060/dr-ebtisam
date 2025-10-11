"use client";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const Login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const Logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ User, Login, Logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
